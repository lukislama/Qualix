package com.example.application.views.settings;

import com.example.application.data.service.CrmService;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import javax.annotation.security.RolesAllowed;

@PageTitle("Settings | LAMPVIew")
@Route(value = "settings", layout = MainLayout.class)
@RolesAllowed("ADMIN")
public class SettingsView extends VerticalLayout
{
    final TextField serverAddressField = new TextField("Server address");
    final TextField accessKeyField = new TextField("Access key");
    final PasswordField secretKey = new PasswordField("Secret key");
    final Button saveButton = new Button("Save");
    CrmService service;

    public SettingsView(CrmService service)
    {
        this.service = service;
        addClassName("settings-view");
        setSizeFull();

        configureContent();

        add(getForm());
    }

    private Component getForm()
    {
        return new VerticalLayout(serverAddressField,
                accessKeyField,
                secretKey,
                saveButton);
    }

    private void configureContent()
    {
        serverAddressField.setRequired(true);
        accessKeyField.setRequired(true);
        secretKey.setRequired(true);

        serverAddressField.setPlaceholder(service.getLampServerAddress());
        accessKeyField.setPlaceholder(service.getLampAccessKey());

        saveButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        saveButton.addClickListener(e -> saveConfiguration());
    }

    private void saveConfiguration()
    {
        if(serverAddressField.isEmpty())
        {
            serverAddressField.setInvalid(true);

            Notification errorNotification = Notification.show("Server address field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if(accessKeyField.isEmpty())
        {
            accessKeyField.setInvalid(true);

            Notification errorNotification = Notification.show("Access key field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if(secretKey.isEmpty())
        {
            secretKey.setInvalid(true);

            Notification errorNotification = Notification.show("Secret key field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        serverAddressField.setInvalid(false);
        accessKeyField.setInvalid(false);
        secretKey.setInvalid(false);

        service.setLampServerAddress(serverAddressField.getValue());
        service.setLampAccessKey(accessKeyField.getValue());
        service.setLampSecretKey(secretKey.getValue());

        Notification successNotification = Notification.show("Configuration saved successfully.");
        successNotification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
    }
}
