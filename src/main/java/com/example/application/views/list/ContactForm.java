package com.example.application.views.list;

import com.example.application.data.entity.Contact;
import com.example.application.data.entity.Status;
import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationException;
import com.vaadin.flow.shared.Registration;

import java.util.List;

public class ContactForm extends FormLayout
{
    final Binder<Contact> binder = new BeanValidationBinder<>(Contact.class);
    Contact contact;

    final TextField studyId = new TextField("ID");
    final TextField firstName = new TextField("First name");
    final TextField lastName = new TextField("Last name");
    final EmailField email = new EmailField("Email");
    final TextField phoneNum = new TextField("Phone number");

    final ComboBox<Status> status = new ComboBox<>("Status");

    final Button save = new Button("Save");
    final Button delete = new Button("Delete");
    final Button close = new Button("Cancel");

    public ContactForm(List<Status> statuses)
    {
        addClassName("contact-form");
        binder.bindInstanceFields(this);

        status.setItems(statuses);
        status.setItemLabelGenerator(Status::getName);

        studyId.setReadOnly(true);

        add(studyId,
                firstName,
                lastName,
                email,
                phoneNum,
                status,
                createButtonsLayout());
    }

    public void setContact(Contact contact)
    {
        this.contact = contact;
        binder.readBean(contact);

    }

    private HorizontalLayout createButtonsLayout()
    {
        save.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        delete.addThemeVariants(ButtonVariant.LUMO_ERROR);
        close.addThemeVariants(ButtonVariant.LUMO_TERTIARY);

        save.addClickListener(e -> validateAndSave());
        delete.addClickListener(e -> fireEvent(new DeleteEvent(this, contact)));
        close.addClickListener(e -> fireEvent(new CloseEvent(this)));

        save.addClickShortcut(Key.ENTER);
        close.addClickShortcut(Key.ESCAPE);

        binder.addStatusChangeListener(e -> save.setEnabled(binder.isValid()));

        return new HorizontalLayout(save, delete, close);
    }

    private void validateAndSave()
    {
        try
        {
            binder.writeBean(contact);
            fireEvent(new SaveEvent(this, contact));
        }
        catch (ValidationException e)
        {
            e.printStackTrace();
        }
    }

    // Events
    public static abstract class ContactFormEvent extends ComponentEvent<ContactForm>
    {
        private final Contact contact;

        protected ContactFormEvent(ContactForm source, Contact contact)
        {
            super(source, false);
            this.contact = contact;
        }

        public Contact getContact()
        {
            return contact;
        }
    }

    public static class SaveEvent extends ContactFormEvent
    {
        SaveEvent(ContactForm source, Contact contact)
        {
            super(source, contact);
        }
    }

    public static class DeleteEvent extends ContactFormEvent
    {
        DeleteEvent(ContactForm source, Contact contact)
        {
            super(source, contact);
        }

    }

    public static class CloseEvent extends ContactFormEvent
    {
        CloseEvent(ContactForm source)
        {
            super(source, null);
        }
    }

    public <T extends ComponentEvent<?>> Registration addListener(Class<T> eventType,
                                                                  ComponentEventListener<T> listener)
    {
        return getEventBus().addListener(eventType, listener);
    }
}