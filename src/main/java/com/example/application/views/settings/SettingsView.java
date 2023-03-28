package com.example.application.views.settings;

import com.example.application.data.service.CrmService;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import javax.annotation.security.RolesAllowed;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;

@PageTitle("Settings | LAMPVIew")
@Route(value = "settings", layout = MainLayout.class)
@RolesAllowed("ADMIN")
public class SettingsView extends VerticalLayout
{
    //Form
    final TextField serverAddressField = new TextField("Server address");
    final TextField accessKeyField = new TextField("Access key");
    final PasswordField secretKey = new PasswordField("Secret key");
    final Button saveButton = new Button("Save");

    //Connection test
    final Button testButton = new Button("Test connection");
    CrmService service;

    public SettingsView(CrmService service)
    {
        this.service = service;
        addClassName("settings-view");
        setSizeFull();

        configureContent();

        HorizontalLayout horizontalLayout = new HorizontalLayout();
        horizontalLayout.setPadding(false);

        add(getForm(), getTestConnectionForm());
    }

    private Component getForm()
    {
        return new VerticalLayout(serverAddressField,
                accessKeyField,
                secretKey,
                saveButton);
    }

    private Component getTestConnectionForm()
    {
        return new VerticalLayout(testButton);
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

        testButton.addClickListener(e -> testConnection());
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

        if(testConnection())
        {
            setServer();
        }
    }

    private boolean testConnection()
    {
        if (service.getLampServerAddress() == null ||
                service.getLampAccessKey() == null ||
                service.getLampSecretKey() == null)
        {
            Notification errorNotification = Notification.show("One of the connection parameters is not set.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return false;
        }

        ProcessBuilder processBuilder = new ProcessBuilder("python3",
                "test_connection.py",
                service.getLampAccessKey(),
                service.getLampSecretKey(),
                service.getLampServerAddress());

        Process process;
        try
        {
            process = processBuilder.start();
        }
        catch (IOException e)
        {
            Notification errorNotification = Notification.show("An error occurred while testing connection.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            e.printStackTrace();
            return false;
        }

        int exitCode;
        try
        {
            exitCode = process.waitFor();
        }
        catch (InterruptedException e)
        {
            Notification errorNotification = Notification.show("An error occurred while testing connection.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            e.printStackTrace();
            return false;
        }

        if(exitCode == 0)
        {
            Notification successNotification = Notification.show("Connection successful.");
            successNotification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);

            return true;
        }
        else
        {
            Notification errorNotification = Notification.show("Connection unsuccessful. Exit code " + exitCode);
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return false;
        }
    }

    private void setServer()
    {
        service.setServer();
    }
}


















