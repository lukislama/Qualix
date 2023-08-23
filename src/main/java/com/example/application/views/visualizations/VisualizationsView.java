package com.example.application.views.visualizations;

import com.example.application.data.entity.Contact;
import com.example.application.data.service.CrmService;
import com.example.application.data.service.ProcessReturn;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datetimepicker.DateTimePicker;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.NativeLabel;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.progressbar.ProgressBar;
import com.vaadin.flow.component.progressbar.ProgressBarVariant;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.theme.lumo.LumoUtility;
import jakarta.annotation.security.PermitAll;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import static com.example.application.data.service.Utilities.createAndRunProcess;

@PageTitle("Visualizations | LAMPView")
@Route(value = "visualizations", layout = MainLayout.class)
@PermitAll
public class VisualizationsView extends VerticalLayout
{
    final ComboBox<String> visualizationType = new ComboBox<>("Visualization type");
    final ComboBox<Contact> patientId = new ComboBox<>("Patient ID");
    final DateTimePicker visualizationStart = new DateTimePicker();
    final DateTimePicker visualizationFinish = new DateTimePicker();
    final Button visualizeButton = new Button("Visualize");
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
        visualizationType.setItems("Accelerometer");
        visualizationType.setRequired(true);

        patientId.setItems(service.findAllContacts(""));
        patientId.setItemLabelGenerator(Contact::getStudyId);
        patientId.setRequired(true);

        visualizationStart.setLabel("Visualization start");

        visualizationFinish.setLabel("Visualization finish");

        visualizeButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        visualizeButton.addClickListener(e -> visualizeData());

        progressBarLabel.setId("pblbl");
        progressBarLabel.addClassName(LumoUtility.TextColor.SECONDARY);
        progressBarLabel.setVisible(false);

        progressBarSubLabel.setId("sublbl");
        progressBarSubLabel.addClassNames(LumoUtility.TextColor.SECONDARY, LumoUtility.FontSize.XSMALL);
        progressBarSubLabel.setVisible(false);

        progressBar.getElement().setAttribute("aria-labelledby", "pblbl");
        progressBar.getElement().setAttribute("aria-describedby", "sublbl");
    }

    private Component getContent()
    {
        HorizontalLayout horizontalLayout = new HorizontalLayout();
        horizontalLayout.setPadding(false);

        horizontalLayout.add(visualizationStart, visualizationFinish);

        return new VerticalLayout(visualizationType,
                patientId,
                horizontalLayout,
                visualizeButton,
                progressBarLabel,
                progressBar,
                progressBarSubLabel);
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

        if (visualizationStart.isEmpty())
        {
            visualizationStart.setInvalid(true);

            Notification errorNotification = Notification.show("Visualization start field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if (visualizationFinish.isEmpty())
        {
            visualizationFinish.setInvalid(true);

            Notification errorNotification = Notification.show("Visualization finish field is empty.");
            errorNotification.addThemeVariants(NotificationVariant.LUMO_ERROR);

            return;
        }

        if(visualizationStart.getValue().isAfter(visualizationFinish.getValue()))
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
                + visualizationStart.getValue().toString() + "_"
                + visualizationFinish.getValue().toString() + ".png");

        if (!image.isFile())
        {
            visualizationType.setInvalid(false);
            patientId.setInvalid(false);
            visualizationStart.setInvalid(false);
            visualizationFinish.setInvalid(false);

            progressBar.setIndeterminate(true);
            progressBarLabel.setVisible(true);
            progressBarSubLabel.setVisible(true);

            ProcessReturn processReturn = createAndRunProcess("python3",
                    "download_and_visualize_data.py",
                    service.getLampAccessKey(),
                    service.getLampSecretKey(),
                    service.getLampServerAddress(),
                    patientId.getValue().getStudyId(),
                    visualizationType.getValue(),
                    visualizationStart.getValue().toString(),
                    visualizationFinish.getValue().toString());

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
