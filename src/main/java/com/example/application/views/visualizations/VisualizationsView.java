package com.example.application.views.visualizations;

import com.example.application.data.entity.Contact;
import com.example.application.data.service.CrmService;
import com.example.application.data.service.ProcessReturn;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.AbstractField;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.HtmlComponent;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datetimepicker.DateTimePicker;
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
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.radiobutton.RadioGroupVariant;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.theme.lumo.LumoUtility;
import jakarta.annotation.security.PermitAll;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

import static com.example.application.data.service.Utilities.createAndRunProcess;

@PageTitle("Visualizations | LAMPView")
@Route(value = "visualizations", layout = MainLayout.class)
@PermitAll
public class VisualizationsView extends VerticalLayout
{
    final ComboBox<String> visualizationType = new ComboBox<>("Visualization type");
    final ComboBox<Contact> patientId = new ComboBox<>("Patient ID");
    final RadioButtonGroup<String> radioButtonGroup = new RadioButtonGroup<>();
    final DateTimePicker visualizationStart = new DateTimePicker();
    final DateTimePicker visualizationFinish = new DateTimePicker();
    final Button visualizeButton = new Button("Visualize");
    final Button helpButton = new Button(new Icon(VaadinIcon.QUESTION));
    final Dialog helpDialog = new Dialog();
    final ProgressBar progressBar = new ProgressBar();
    final NativeLabel progressBarLabel = new NativeLabel("Downloading data and generating image...");
    final Span progressBarSubLabel = new Span("Process can take a very long time depending on the amount of data that needs to be processed.");

    final CrmService service;

    public VisualizationsView(CrmService service)
    {
        this.service = service;
        addClassName("visualizations-view");
        setSizeFull();

        configureContent();

        add(getContent());
    }

    private void configureContent()
    {
        visualizationType.setItems("Accelerometer", "Data_quality");
        visualizationType.setRequired(true);

        patientId.setItems(service.findAllContacts(""));
        patientId.setItemLabelGenerator(Contact::getStudyId);
        patientId.setRequired(true);

        radioButtonGroup.addThemeVariants(RadioGroupVariant.LUMO_VERTICAL);
        radioButtonGroup.setLabel("Visualization length");
        radioButtonGroup.setItems("1 day", "3 days", "5 days", "7 days", "Custom");
        radioButtonGroup.addValueChangeListener(this::changeCustomVisualizationVisibility);
        radioButtonGroup.setValue("1 day");

        visualizationStart.setLabel("Visualization start");

        visualizationFinish.setLabel("Visualization finish");

        visualizeButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        visualizeButton.addClickListener(e -> visualizeData());

        helpButton.addThemeVariants(ButtonVariant.LUMO_ICON);
        helpButton.getElement().setAttribute("aria-label", "Show help dialog");
        helpButton.addClickListener(e -> helpDialog.open());

        VerticalLayout dialogLayout = createDialogLayout(helpDialog);
        helpDialog.add(dialogLayout);

        progressBarLabel.setId("pblbl");
        progressBarLabel.addClassName(LumoUtility.TextColor.SECONDARY);
        progressBarLabel.setVisible(false);

        progressBarSubLabel.setId("sublbl");
        progressBarSubLabel.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.XSMALL);
        progressBarSubLabel.setVisible(false);

        progressBar.getElement().setAttribute("aria-labelledby", "pblbl");
        progressBar.getElement().setAttribute("aria-describedby", "sublbl");
    }

    private VerticalLayout createDialogLayout(Dialog helpDialog)
    {
        H2 headline = new H2("Visualization data cache information");
        headline.getStyle().set("margin", "var(--lumo-space-m) 0")
                .set("font-size", "1.5em").set("font-weight", "bold");

        Paragraph paragraph = new Paragraph();
        paragraph.add("Using the 'Custom' option will not use the data cache and can take a very long time to finish. " +
                "It is recommended to use the other options instead.");
        paragraph.add(new HtmlComponent("br"));
        paragraph.add("While using the data cache, 1 day of data takes about 10 seconds to process.");
        paragraph.add(new HtmlComponent("br"));
        paragraph.add("While using the custom option, 1 day of data takes about 360 seconds to process.");

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

    private Component getContent()
    {
        HorizontalLayout horizontalLayout = new HorizontalLayout();
        HorizontalLayout buttonsHorizontalLayout = new HorizontalLayout();

        horizontalLayout.setPadding(false);
        buttonsHorizontalLayout.setPadding(false);

        horizontalLayout.add(visualizationStart, visualizationFinish);
        buttonsHorizontalLayout.add(visualizeButton, helpButton);

        return new VerticalLayout(visualizationType,
                patientId,
                radioButtonGroup,
                horizontalLayout,
                buttonsHorizontalLayout,
                progressBarLabel,
                progressBar,
                progressBarSubLabel);
    }

    private void changeCustomVisualizationVisibility(AbstractField.ComponentValueChangeEvent<RadioButtonGroup<String>, String> event)
    {
        if (event.getValue().equals("Custom"))
        {
            visualizationStart.setVisible(true);
            visualizationFinish.setVisible(true);
        }
        else
        {
            visualizationStart.setVisible(false);
            visualizationFinish.setVisible(false);
        }
    }

    private LocalDateTime getVisualizationStart()
    {
        if (radioButtonGroup.getValue().equals("Custom"))
        {
            return visualizationStart.getValue();
        }

        LocalDateTime returnValue = LocalDateTime.now().minusDays(1).truncatedTo(ChronoUnit.DAYS);
        switch (radioButtonGroup.getValue())
        {
            case "1 day" ->
            {
                return returnValue.minusDays(1);
            }
            case "3 days" ->
            {
                return returnValue.minusDays(3);
            }
            case "5 days" ->
            {
                return returnValue.minusDays(5);
            }
            case "7 days" ->
            {
                return returnValue.minusDays(7);
            }
        }

        return returnValue;
    }

    private LocalDateTime getVisualizationFinish()
    {
        if (radioButtonGroup.getValue().equals("Custom"))
        {
            return visualizationFinish.getValue();
        }

        return LocalDateTime.now().minusDays(1).truncatedTo(ChronoUnit.DAYS);
    }

    private void visualizeData()
    {
        if (visualizationType.isEmpty())
        {
            visualizationType.setInvalid(true);

            Notification errorNotification = Notification.show("Visualization type field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if (patientId.isEmpty())
        {
            patientId.setInvalid(true);

            Notification errorNotification = Notification.show("Patient ID field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if (radioButtonGroup.getValue().equals("Custom") &&
                visualizationStart.isEmpty())
        {
            visualizationStart.setInvalid(true);

            Notification errorNotification = Notification.show("Visualization start field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if (radioButtonGroup.getValue().equals("Custom") &&
                visualizationFinish.isEmpty())
        {
            visualizationFinish.setInvalid(true);

            Notification errorNotification = Notification.show("Visualization finish field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if(getVisualizationStart().isAfter(getVisualizationFinish()))
        {

            visualizationFinish.setInvalid(true);

            Notification errorNotification = Notification.show("Visualizations start cannot be after visualization end.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if (!service.isServerSet())
        {
            Notification errorNotification = Notification.show("LAMP server information is not set.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        File image = new File("generated_visualizations/"
                + patientId.getValue().getStudyId() + "_"
                + visualizationType.getValue() + "_"
                + getVisualizationStart().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")) + "_"
                + getVisualizationFinish().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")) + ".png");

        if (!image.isFile())
        {
            visualizationType.setInvalid(false);
            patientId.setInvalid(false);
            visualizationStart.setInvalid(false);
            visualizationFinish.setInvalid(false);

            progressBar.setIndeterminate(true);
            progressBarLabel.setVisible(true);
            progressBarSubLabel.setVisible(true);

            ProcessReturn processReturn;

            if (radioButtonGroup.getValue().equals("Custom"))
            {
                processReturn = createAndRunProcess("python3",
                        "download_and_visualize_data.py",
                        service.getLampAccessKey(),
                        service.getLampSecretKey(),
                        service.getLampServerAddress(),
                        patientId.getValue().getStudyId(),
                        visualizationType.getValue(),
                        getVisualizationStart().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                        getVisualizationFinish().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")));
            }
            else
            {
//                System.out.println("Calling process python3 with args: download_and_visualize_data_from_cache.py, " +
//                        patientId.getValue().getStudyId() + ", " +
//                        visualizationType.getValue() + ", " +
//                        formatDayString(radioButtonGroup.getValue()));

                processReturn = createAndRunProcess("python3",
                        "download_and_visualize_data_from_cache.py",
                        patientId.getValue().getStudyId(),
                        visualizationType.getValue(),
                        formatDayString(radioButtonGroup.getValue()));
            }

            if (processReturn.getExitCode() == 0)
            {
                visualizationSuccessful();

                System.out.println(processReturn.getResults());
            }
            else
            {
                Notification errorNotification;

                if (processReturn.getExitCode() == 101)
                {
                    errorNotification = Notification.show("No data for patient.");
                }
                else
                {
                    errorNotification = Notification.show("Visualization unsuccessful. Exit code " + processReturn.getExitCode());
                }

                errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

                progressBar.setIndeterminate(false);
                progressBar.addThemeVariants(ProgressBarVariant.LUMO_ERROR);
                progressBar.setValue(1);

                progressBarLabel.setVisible(false);
                progressBarSubLabel.setVisible(false);

                System.out.println(processReturn.getResults());

                return;
            }

            System.out.println("Trying to locate file " + image.toPath());

            if (!image.isFile())
            {
                Notification errorNotification = Notification.show("Unable to locate visualization file.");
                errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

                return;
            }
        }
        else
        {
            visualizationSuccessful();
        }

        StreamResource imageResource = new StreamResource(image.getName(),
                () ->
                {
                    try
                    {
                        return Files.newInputStream(image.toPath());
                    }
                    catch (IOException e)
                    {
                        throw new RuntimeException(e);
                    }
                });

        Image visualization = new Image(imageResource, "Visualization");

        add(visualization);
    }

    private String formatDayString(String inputString)
    {
        switch (inputString)
        {
            case "1 day" ->
            {
                return "1DAY";
            }

            case "3 days" ->
            {
                return "3DAYS";
            }

            case "5 days" ->
            {
                return "5DAYS";
            }

            case "7 days" ->
            {
                return "7DAYS";
            }
        }

        return inputString;
    }

    private void visualizationSuccessful()
    {
        Notification successNotification = Notification.show("Visualization successful.");
        successNotification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);

        progressBar.setIndeterminate(false);
        progressBar.addThemeVariants(ProgressBarVariant.LUMO_SUCCESS);
        progressBar.setValue(1);

        progressBarLabel.setVisible(false);
        progressBarSubLabel.setVisible(false);
    }
}
