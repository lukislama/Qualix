package com.example.application.views.settings;

import com.example.application.data.service.MainService;
import com.example.application.data.service.ProcessReturn;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.HtmlComponent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.progressbar.ProgressBar;
import com.vaadin.flow.component.progressbar.ProgressBarVariant;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import com.vaadin.flow.theme.lumo.LumoUtility;
import jakarta.annotation.security.RolesAllowed;

import static com.example.application.data.service.Utilities.createAndRunProcess;

@PageTitle("Settings | Qualix")
@Route(value = "settings", layout = MainLayout.class)
@RolesAllowed("ADMIN")
public class SettingsView extends VerticalLayout
{
    //LAMP server
    final Span lampServerSpan = new Span("LAMP server settings");
    final TextField serverAddressField = new TextField("Server address");
    final TextField studyIdField = new TextField("Study ID");
    final TextField accessKeyField = new TextField("Access key");
    final PasswordField secretKey = new PasswordField("Secret key");
    final Button saveButton = new Button("Save");
    final Button testButton = new Button("Test connection");

    //Email settings
    final Span emailSettingsSpan = new Span("Google email settings");
    final EmailField recipientEmailField = new EmailField("Recipient email address");
    final EmailField emailAddressField = new EmailField("Email address");
    final PasswordField googleAppPasswordField = new PasswordField("Google app password");
    final Button saveGoogleCredentialsButton = new Button("Save");
    final Button helpButton = new Button(new Icon(VaadinIcon.QUESTION));
    final Dialog helpDialog = new Dialog();
    final MainService service;

    //Data cache settings
    final Span cacheSettingsSpan = new Span("Data cache settings");
    final ProgressBar progressBar = new ProgressBar();
    final NativeLabel progressBarLabel = new NativeLabel("Cache is being generated.");
    final Button createDataCacheButton = new Button("Create cache");

    public SettingsView(MainService service)
    {
        this.service = service;
        addClassName("settings-view");
        setSizeFull();

        configureContent();

        HorizontalLayout horizontalLayout = new HorizontalLayout();
        horizontalLayout.setPadding(false);

        horizontalLayout.add(getForm(), getEmailSettingsForm(), getDataCacheSettingsForm());

        add(horizontalLayout);
    }

    private Component getForm()
    {
        HorizontalLayout horizontalLayout = new HorizontalLayout();
        horizontalLayout.setPadding(false);

        horizontalLayout.add(saveButton, testButton);

        return new VerticalLayout(lampServerSpan,
                serverAddressField,
                studyIdField,
                accessKeyField,
                secretKey,
                horizontalLayout);
    }

    private Component getEmailSettingsForm()
    {
        HorizontalLayout horizontalLayout = new HorizontalLayout();
        horizontalLayout.setPadding(false);

        horizontalLayout.add(saveGoogleCredentialsButton, helpButton);

        return new VerticalLayout(emailSettingsSpan,
                recipientEmailField,
                emailAddressField,
                googleAppPasswordField,
                horizontalLayout,
                helpDialog);
    }

    private Component getDataCacheSettingsForm()
    {
        return new VerticalLayout(cacheSettingsSpan,
                progressBar,
                progressBarLabel,
                createDataCacheButton);
    }

    private void configureContent()
    {
        //LAMP server settings
        serverAddressField.setRequired(true);
        studyIdField.setRequired(true);
        accessKeyField.setRequired(true);
        secretKey.setRequired(true);

        serverAddressField.setPlaceholder(service.getLampServerAddress());
        studyIdField.setPlaceholder(service.getLampStudyId());
        accessKeyField.setPlaceholder(service.getLampAccessKey());

        saveButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        saveButton.addClickListener(e -> saveConfiguration());

        testButton.addClickListener(e -> testConnection());

        //Email settings
        recipientEmailField.setRequired(true);
        emailAddressField.setRequired(true);
        googleAppPasswordField.setRequired(true);

        recipientEmailField.setPlaceholder(service.getRecipientEmailAddress());
        emailAddressField.setPlaceholder(service.getGoogleEmailAddress());

        saveGoogleCredentialsButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        saveGoogleCredentialsButton.addClickListener(e -> saveGoogleCredentials());

        helpButton.addThemeVariants(ButtonVariant.LUMO_ICON);
        helpButton.getElement().setAttribute("aria-label", "Show help dialog");
        helpButton.addClickListener(e -> helpDialog.open());

        VerticalLayout dialogLayout = createDialogLayout(helpDialog);
        helpDialog.add(dialogLayout);

        //Cache settings
        progressBarLabel.setId("pblbl");
        progressBarLabel.addClassName(LumoUtility.TextColor.SECONDARY);
        progressBarLabel.setVisible(false);

        progressBar.getElement().setAttribute("aria-labelledby", "pblbl");

        configureCacheStatus();

        createDataCacheButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        createDataCacheButton.addClickListener(e -> generateDataCache());
    }

    public void configureCacheStatus()
    {
        switch (service.getDataCacheStatus())
        {
            case "BUILT" ->
            {
                progressBarLabel.setVisible(false);

                progressBar.setIndeterminate(false);
                progressBar.addThemeVariants(ProgressBarVariant.LUMO_SUCCESS);
                progressBar.setValue(1);

                createDataCacheButton.setEnabled(false);
            }

            case "BUILDING" ->
            {
                progressBarLabel.setVisible(true);

                progressBar.setIndeterminate(true);

                createDataCacheButton.setEnabled(false);
            }

            case "NOT_BUILT" ->
            {
                progressBarLabel.setVisible(false);

                progressBar.setIndeterminate(false);
                progressBar.setValue(0);

                createDataCacheButton.setEnabled(true);
            }

            case "ERROR" ->
            {
                progressBarLabel.setVisible(false);

                progressBar.setIndeterminate(false);
                progressBar.addThemeVariants(ProgressBarVariant.LUMO_ERROR);
                progressBar.setValue(1);

                createDataCacheButton.setEnabled(true);
            }
        }
    }

    public void generateDataCacheThread(UI ui)
    {
        ProcessReturn processReturn = createAndRunProcess("python3",
                "create_data_cache.py",
                service.getLampAccessKey(),
                service.getLampSecretKey(),
                service.getLampServerAddress(),
                service.getLampStudyId());

        if (processReturn.getExitCode() == 0)
        {
            service.setDataCacheStatus("BUILT");
            service.consolidateImageCache();
        }
        else
        {
            service.setDataCacheStatus("ERROR");
        }

        System.out.println("Thread finished!");
        ui.access(this::configureCacheStatus);
        ui.push();
    }

    public void generateDataCache()
    {
        service.setDataCacheStatus("BUILDING");
        configureCacheStatus();

        new Thread(() -> generateDataCacheThread(getUI().get())).start();
    }

    private VerticalLayout createDialogLayout(Dialog helpDialog)
    {
        H2 headline = new H2("Google App Password information");
        headline.getStyle().set("margin", "var(--lumo-space-m) 0")
                .set("font-size", "1.5em").set("font-weight", "bold");

        Paragraph paragraph = new Paragraph();
        paragraph.add("In order to send email notifications, you need to use a Google account.");
        paragraph.add(new HtmlComponent("br"));
        paragraph.add("In order to use this feature, you need to activate 2 factor authentication and generate a new \"App password\".");
        paragraph.add(new HtmlComponent("br"));
        paragraph.add("Do NOT use your Google account password, it will not work.");
        paragraph.add(new HtmlComponent("br"));
        paragraph.add("Follow the instructions on how to set up App Passwords ");
        paragraph.add(new Anchor("https://support.google.com/accounts/answer/185833?hl=en&sjid=3303992743476717718-EU", "here."));

        Button closeButton = new Button("Close");
        closeButton.addClickListener(e -> helpDialog.close());

        VerticalLayout dialogLayout = new VerticalLayout(headline,
                paragraph,
                closeButton);
        dialogLayout.setPadding(false);
        dialogLayout.setAlignItems(FlexComponent.Alignment.STRETCH);
        dialogLayout.getStyle().set("width", "500px").set("max-width", "100%");
        dialogLayout.setAlignSelf(FlexComponent.Alignment.END, closeButton);

        return dialogLayout;
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

        if(studyIdField.isEmpty())
        {
            studyIdField.setInvalid(true);

            Notification errorNotification = Notification.show("Study ID field is empty.");
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
        studyIdField.setInvalid(false);
        accessKeyField.setInvalid(false);
        secretKey.setInvalid(false);

        service.setLampServerAddress(serverAddressField.getValue());
        service.setLampStudyId(studyIdField.getValue());
        service.setLampAccessKey(accessKeyField.getValue());
        service.setLampSecretKey(secretKey.getValue());

        Notification successNotification = Notification.show("Configuration saved successfully.");
        successNotification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);

        if(testConnection())
        {
            service.setServer();
        }
    }

    private void saveGoogleCredentials()
    {
        if(recipientEmailField.isEmpty())
        {
            recipientEmailField.setInvalid(true);

            Notification errorNotification = Notification.show("Recipient email address field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if(emailAddressField.isEmpty())
        {
            emailAddressField.setInvalid(true);

            Notification errorNotification = Notification.show("Email address field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if(googleAppPasswordField.isEmpty())
        {
            googleAppPasswordField.setInvalid(true);

            Notification errorNotification = Notification.show("Google app password field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        recipientEmailField.setInvalid(false);
        emailAddressField.setInvalid(false);
        googleAppPasswordField.setInvalid(false);

        service.setRecipientEmailAddress(recipientEmailField.getValue());
        service.setGoogleEmailAddress(emailAddressField.getValue());
        service.setGoogleAppPassword(googleAppPasswordField.getValue());

        Notification successNotification = Notification.show("Configuration saved successfully.");
        successNotification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);

        if(service.setEmail())
        {
            successNotification = Notification.show("Notification email sent successfully.");
            successNotification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
        }
        else
        {
            Notification errorNotification = Notification.show("An error occurred while sending the notification email.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);
        }
    }

    private boolean testConnection()
    {
        if (service.getLampServerAddress() == null ||
                service.getLampAccessKey() == null ||
                service.getLampSecretKey() == null ||
                service.getLampStudyId() == null)
        {
            Notification errorNotification = Notification.show("One of the connection parameters is not set.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return false;
        }

        ProcessReturn processReturn = createAndRunProcess("python3",
                "test_connection.py",
                service.getLampAccessKey(),
                service.getLampSecretKey(),
                service.getLampServerAddress(),
                service.getLampStudyId());

        if(processReturn.getExitCode() == 0)
        {
            Notification successNotification = Notification.show("Connection successful.");
            successNotification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);

            return true;
        }
        else
        {
            Notification errorNotification = Notification.show("Connection unsuccessful. Exit code " + processReturn.getExitCode());
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return false;
        }
    }
}
