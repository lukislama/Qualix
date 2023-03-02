package com.example.application.views.list;

import com.example.application.data.entity.Contact;
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

import javax.annotation.security.RolesAllowed;

@PageTitle("Participant list")
@Route(value = "list", layout = MainLayout.class)
@RolesAllowed("ADMIN")
public class ListView extends VerticalLayout
{
    final Grid<Contact> contactGrid = new Grid<>(Contact.class);
    final TextField filterText = new TextField();
    ContactForm contactForm;
    final CrmService service;

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

        updateList();
        closeEditor();
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
        contactForm = new ContactForm(service.findAllStatuses());
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

        contactGrid.setColumns("studyId", "firstName", "lastName", "email", "phoneNum");
        contactGrid.addColumn(contact -> contact
                        .getStatus()
                        .getName())
                .setHeader("Status");

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
