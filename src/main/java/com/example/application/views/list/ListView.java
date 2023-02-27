package com.example.application.views.list;

import com.example.application.data.entity.Company;
import com.example.application.data.entity.Contact;
import com.example.application.data.entity.Status;
import com.example.application.data.service.CrmService;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;

import javax.annotation.security.PermitAll;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@org.springframework.stereotype.Component
@Scope("prototype")
@PageTitle("Participant list")
@Route(value = "", layout = MainLayout.class)
@PermitAll
public class ListView extends VerticalLayout
{
    Grid<Contact> contactGrid = new Grid<>(Contact.class);
    TextField filterText = new TextField();
    ContactForm contactForm;
    CrmService service;

    public ListView(CrmService service)
    {
        this.service = service;
        addClassName("list-view");
        setSizeFull();

        configureGrid();
        configureForm();

        add(
            getToolbar(),
            getContent()
        );

        //generateContacts();

        updateList();
        closeEditor();
    }

    private void generateContacts()
    {
        List<Company> companies = new ArrayList<>();
        companies.add(new Company());
        companies.add(new Company());
        companies.add(new Company());

        companies.get(0).setName("CVUT");
        companies.get(1).setName("Skoda");
        companies.get(2).setName("Dell");

        List<Status> statuses = new ArrayList<>();
        statuses.add(new Status());
        statuses.add(new Status());
        statuses.add(new Status());

        statuses.get(0).setName("In study");
        statuses.get(0).setName("Finished");
        statuses.get(0).setName("Dropped out");

        List<String> firstNames = new ArrayList<>();
        firstNames.add("John");
        firstNames.add("Bob");
        firstNames.add("Alex");

        List<String> lastNames = new ArrayList<>();
        lastNames.add("Snow");
        lastNames.add("Jobs");
        lastNames.add("Fitzgerald");

        int randomNum;
        String firstName, lastName, email;
        Company company;
        Status status;
        Contact contact;
        for (int i = 0; i < 50; i++)
        {
            randomNum = ThreadLocalRandom.current().nextInt(0, 2 + 1);
            firstName = firstNames.get(randomNum);

            randomNum = ThreadLocalRandom.current().nextInt(0, 2 + 1);
            lastName = lastNames.get(randomNum);

            randomNum = ThreadLocalRandom.current().nextInt(0, 2 + 1);
            company = companies.get(randomNum);

            randomNum = ThreadLocalRandom.current().nextInt(0, 2 + 1);
            status = statuses.get(randomNum);

            email = firstName + "." + lastName + "@email.com";

            contact = new Contact();
            contact.setFirstName(firstName);
            contact.setLastName(lastName);
            contact.setCompany(company);
            contact.setStatus(status);
            contact.setEmail(email);

            service.saveContact(contact);
        }
    }

    private void closeEditor()
    {
        contactForm.setContact(null);
        contactForm.setVisible(false);
        removeClassName("editing");
    }

    private void updateList()
    {
        contactGrid.setItems(service.findAllContacts(filterText.getValue()));

    }

    private Component getContent()
    {
        HorizontalLayout content = new HorizontalLayout(contactGrid, contactForm);

        content.setFlexGrow(2, contactGrid);
        content.setFlexGrow(1, contactForm);
        content.addClassName("content");
        content.setSizeFull();

        return content;
    }

    private void configureForm()
    {
        contactForm = new ContactForm(service.findAllCompanies(), service.findAllStatuses());
        contactForm.setWidth("25em");

        contactForm.addListener(ContactForm.SaveEvent.class, this::saveContact);
        contactForm.addListener(ContactForm.DeleteEvent.class, this::deleteContact);
        contactForm.addListener(ContactForm.CloseEvent.class, e -> closeEditor());
    }

    private void deleteContact(ContactForm.DeleteEvent event)
    {
        service.deleteContact(event.getContact());
        updateList();
        closeEditor();
    }

    private void saveContact(ContactForm.SaveEvent event)
    {
        service.saveContact(event.getContact());
        updateList();
        closeEditor();
    }

    private Component getToolbar()
    {
        filterText.setPlaceholder("Filter by name...");
        filterText.setClearButtonVisible(true);
        filterText.setValueChangeMode(ValueChangeMode.LAZY);
        filterText.addValueChangeListener(e -> updateList());

        Button addContactButton = new Button("Add contact");
        addContactButton.addClickListener(e -> addContact());

        HorizontalLayout toolbar = new HorizontalLayout(filterText, addContactButton);
        toolbar.addClassName("toolbar");
        return toolbar;
    }

    private void addContact()
    {
        contactGrid.asSingleSelect().clear();
        editContact(new Contact());
    }

    private void configureGrid()
    {
        contactGrid.addClassName("contact-grid");
        contactGrid.setSizeFull();

        contactGrid.setColumns("firstName", "lastName", "email");
        contactGrid.addColumn(contact -> contact
                        .getStatus()
                        .getName())
                .setHeader("Status");
        contactGrid.addColumn(contact -> contact
                .getCompany()
                .getName())
                .setHeader("Company");

        contactGrid.getColumns().forEach(column -> column.setAutoWidth(true));

        contactGrid.asSingleSelect().addValueChangeListener(e -> editContact(e.getValue()));
    }

    private void editContact(Contact contact)
    {
        if(contact == null)
        {
            closeEditor();
            return;
        }

        contactForm.setContact(contact);
        contactForm.setVisible(true);
        addClassName("editing");
    }
}















