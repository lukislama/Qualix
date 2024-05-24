package com.example.application.data.service;

import com.example.application.data.entity.Contact;
import com.example.application.data.entity.Data;
import com.example.application.data.entity.DataPoint;
import com.example.application.data.entity.Status;
import com.example.application.data.repository.ContactRepository;
import com.example.application.data.repository.DataPointRepository;
import com.example.application.data.repository.DataRepository;
import com.example.application.data.repository.StatusRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.*;
import java.util.stream.Collectors;

import static com.example.application.data.service.Utilities.createAndRunProcess;
import static com.example.application.data.service.Utilities.sendEmail;

@Service
public class MainService
{
    private final ContactRepository contactRepository;
    private final StatusRepository statusRepository;
    private final DataRepository dataRepository;
    private final DataPointRepository dataPointRepository;

    private final AppConfig appConfig;

    public MainService(ContactRepository contactRepository,
                       StatusRepository statusRepository,
                       DataRepository dataRepository,
                       DataPointRepository dataPointRepository,
                       AppConfig appConfig)
    {
        this.contactRepository = contactRepository;
        this.statusRepository = statusRepository;
        this.dataRepository = dataRepository;
        this.dataPointRepository = dataPointRepository;
        this.appConfig = appConfig;

        saveStatuses();

        if(appConfig.isServerSet())
        {
            getStudyParticipants();
        }

        if(appConfig.isEmailSet())
        {
            sendEmail(appConfig.getGoogleEmailAddress(),
                    appConfig.getGoogleAppPassword(),
                    appConfig.getRecipientEmailAddress(),
                    "Receiving email set.",
                    "You email has been set to receive notifications from the Qualix application.\n" +
                            "If you think this is a mistake, please contact the study administrators at " + appConfig.getGoogleEmailAddress());
        }
    }

    private void saveStatuses()
    {
        List<Status> statuses = new ArrayList<>();
        statuses.add(new Status());
        statuses.add(new Status());
        statuses.add(new Status());

        statuses.get(0).setName("In study");
        statuses.get(1).setName("Finished");
        statuses.get(2).setName("Dropped out");

        for (Status status : statuses)
        {
            this.saveStatus(status);
        }
    }

    public boolean setEmail()
    {
        appConfig.setEmailSet(true);

        return sendEmail(appConfig.getGoogleEmailAddress(),
                appConfig.getGoogleAppPassword(),
                appConfig.getRecipientEmailAddress(),
                "Receiving email set.",
                "You email has been set to receive notifications from the Qualix application.\n" +
                        "If you think this is a mistake, please contact the study administrators at " + appConfig.getGoogleEmailAddress());
    }

    public void setServer()
    {
        appConfig.setServerSet(true);

        getStudyParticipants();
        getDataQualityForPreviousDay();
    }

    private void getStudyParticipants()
    {
        ProcessReturn processReturn = createAndRunProcess("python3",
                "get_study_participants.py",
                appConfig.getLampAccessKey(),
                appConfig.getLampSecretKey(),
                appConfig.getLampServerAddress(),
                appConfig.getLampStudyId());

        if(processReturn.getExitCode() == 0)
        {
            Set<String> savedContactIds = findAllContacts("")
                    .stream()
                    .map(Contact::getStudyId).collect(Collectors.toSet());

            Contact contact;
            Data data;
            for (String participantId : processReturn.getResults())
            {
                if (savedContactIds.contains(participantId))
                {
                    continue;
                }

                contact = new Contact();
                contact.setStudyId(participantId);
                contact.setFirstName("Change me");
                contact.setLastName("Change me");
                contact.setEmail("change@me.com");
                contact.setPhoneNum("0000000000");
                contact.setStatus(findAllStatuses().stream()
                        .filter(e -> e.getName().equals("In study"))
                        .toList()
                        .get(0));

                data = new Data();
                data.setGPS("⚫");
                data.setAccelerometer("⚫");
                data.setDisplay("⚫");
                data.setDeviceMotion("⚫");
                data.setParticipantStudyId(participantId);
                data.setContact(contact);

                this.saveData(data);
            }
        }
        else
        {
            System.err.println("An error occurred while getting study participants.");
        }
    }

    @Scheduled(cron = "0 0 7 * * *")
    private void getDataQualityForPreviousDay()
    {
        if (appConfig.isServerSet())
        {
            ProcessReturn processReturn;
            LocalDateTime date, currentDate = LocalDateTime.now();
            Duration timeDifference;
            DataPoint dataPoint;
            long hoursDifference;

            List<Contact> contacts = findAllContacts("");
            Data data;
            List<DataPoint> dataPoints;
            for (Contact contact : contacts)
            {
                data = contact.getData();

                dataPoints = data.getDataPoints()
                        .stream()
                        .filter(e -> e.getDate().equals(LocalDate.now().toString()))
                        .toList();

                System.out.println("Patient: " + contact.getStudyId());

                if (!dataPoints.isEmpty())
                {
                    continue;
                }

                processReturn = createAndRunProcess("python3",
                        "get_participant_last_data_time.py",
                        appConfig.getLampAccessKey(),
                        appConfig.getLampSecretKey(),
                        appConfig.getLampServerAddress(),
                        contact.getStudyId());

                if(processReturn.getResults().isEmpty())
                {
                    System.out.println("Skipping");
                    continue;
                }

                dataPoint = new DataPoint();
                dataPoint.setParticipantStudyId(contact.getStudyId());
                dataPoint.setDate(currentDate.toLocalDate().toString());
                dataPoint.setData(contact.getData());

                date = LocalDateTime.ofEpochSecond(
                        Long.parseLong(processReturn.getResults().get(0)) / 1000,
                        0,
                        ZoneOffset.UTC);
                timeDifference = Duration.between(date, currentDate);
                hoursDifference = timeDifference.toHours();

                if(hoursDifference <= 2)
                {
                    dataPoint.setGPS("🟢");
                }
                else if(hoursDifference <= 12)
                {
                    dataPoint.setGPS("🟡");
                }
                else
                {
                    dataPoint.setGPS("🔴");
                }

                date = LocalDateTime.ofEpochSecond(
                        Long.parseLong(processReturn.getResults().get(1)) / 1000,
                        0,
                        ZoneOffset.UTC);
                timeDifference = Duration.between(date, currentDate);
                hoursDifference = timeDifference.toHours();

                if(hoursDifference <= 2)
                {
                    dataPoint.setAccelerometer("🟢");
                }
                else if(hoursDifference <= 12)
                {
                    dataPoint.setAccelerometer("🟡");
                }
                else
                {
                    dataPoint.setAccelerometer("🔴");
                }

                date = LocalDateTime.ofEpochSecond(
                        Long.parseLong(processReturn.getResults().get(2)) / 1000,
                        0,
                        ZoneOffset.UTC);
                timeDifference = Duration.between(date, currentDate);
                hoursDifference = timeDifference.toHours();

                if(hoursDifference <= 2)
                {
                    dataPoint.setDisplay("🟢");
                }
                else if(hoursDifference <= 12)
                {
                    dataPoint.setDisplay("🟡");
                }
                else
                {
                    dataPoint.setDisplay("🔴");
                }

                date = LocalDateTime.ofEpochSecond(
                        Long.parseLong(processReturn.getResults().get(3)) / 1000,
                        0,
                        ZoneOffset.UTC);
                timeDifference = Duration.between(date, currentDate);
                hoursDifference = timeDifference.toHours();

                if(hoursDifference <= 2)
                {
                    dataPoint.setDeviceMotion("🟢");
                }
                else if(hoursDifference <= 12)
                {
                    dataPoint.setDeviceMotion("🟡");
                }
                else
                {
                    dataPoint.setDeviceMotion("🔴");
                }

                this.saveDataPoint(dataPoint);
            }

            recolorData();

            if (appConfig.isEmailSet())
            {
                sendEmail(appConfig.getGoogleEmailAddress(),
                        appConfig.getGoogleAppPassword(),
                        appConfig.getRecipientEmailAddress(),
                        "Qualix report " + currentDate.toLocalDate(),
                        generateTableForEmail());

                System.out.println("Notification email send.");
            }
        }
    }

    private void recolorData()
    {
        List<Contact> contactList = contactRepository.findAll();
        Data data;
        List<DataPoint> dataPoints;
        for (Contact contact : contactList)
        {
            data = contact.getData();

            dataPoints = data.getDataPoints()
                    .stream()
                    .filter(e -> e.getDate().equals(LocalDate.now().toString()))
                    .toList();

            if(!dataPoints.isEmpty())
            {
                data.setGPS(dataPoints.get(0).getGPS());
                data.setAccelerometer(dataPoints.get(0).getAccelerometer());
                data.setDisplay(dataPoints.get(0).getDisplay());
                data.setDeviceMotion(dataPoints.get(0).getDeviceMotion());
            }

            this.saveData(data);
        }
    }

    private String generateTableForEmail()
    {
        List<Contact> contactList = contactRepository.findAll();
        Data data;
        String[][] tableValues = new String[contactList.size()][4];
        String returnString;

        for (int i = 0; i < contactList.size(); i++)
        {
            data = contactList.get(i).getData();

            tableValues[i][0] = data.getGPS();
            tableValues[i][1] = data.getAccelerometer();
            tableValues[i][2] = data.getDisplay();
            tableValues[i][3] = data.getDeviceMotion();
        }

        returnString = new Utilities.TableBuilder()
                .addHeaders("GPS", "Accelerometer", "Display", "Device motion")
                .setValues(tableValues)
                .addRowNames(contactList.stream()
                        .map(Contact::getStudyId)
                        .toArray(String[]::new))
                .setBorders(Utilities.TableBuilder.Borders.HEADER_ROW_PLAIN)
                .setName("ID")
                .frame(false)
                .build();

        System.out.println(returnString);
        return returnString;
    }

    @Scheduled(cron = "0 0 3 * * *")
    private void consolidateDataCache()
    {
        if (Objects.equals(appConfig.getStatus(), "BUILT"))
        {
            ProcessReturn processReturn = createAndRunProcess("python3",
                    "consolidate_data_cache.py",
                    getLampAccessKey(),
                    getLampSecretKey(),
                    getLampServerAddress(),
                    getLampStudyId());

            if (processReturn.getExitCode() != 0)
            {
                System.out.println("An error occurred while generating data cache: Exit code " + processReturn.getExitCode());
                System.out.println(processReturn.getResults());
            }
            else
            {
                System.out.println("Data cache consolidated. Output:  " + processReturn.getResults());

                consolidateImageCache();
            }
        }
    }

    public void consolidateImageCache()
    {
        ProcessReturn processReturn;

        processReturn = createAndRunProcess("python3",
                "delete_old_visualizations.py");

        if (processReturn.getExitCode() != 0)
        {
            System.out.println("An error occurred while deleting old visualizations. Exit code: " + processReturn.getExitCode());
        }

        System.out.println(processReturn.getResults());

        List<Contact> contacts = findAllContacts("");
        List<String> visualizationLengths = List.of("1DAY",
                "3DAYS",
                "5DAYS",
                "7DAYS");
        for (Contact contact : contacts)
        {
            for (String visualizationType : appConfig.getVisualizationTypes())
            {
                for (String visualizationLength : visualizationLengths)
                {
                    processReturn = createAndRunProcess("python3",
                            "download_and_visualize_data_from_cache.py",
                            contact.getStudyId(),
                            visualizationType,
                            visualizationLength);

                    if (processReturn.getExitCode() == 0)
                    {
                        System.out.println("Generated " + visualizationType + " visualization" +
                                " for patient " + contact.getStudyId() + " of length " + visualizationLength);
                    }
                    else if (processReturn.getExitCode() == 101)
                    {
                        System.out.println("No " + visualizationType + " data for patient " + contact.getStudyId());
                    }
                    else
                    {
                        System.out.println("An error occurred while visualizing " + visualizationType +
                                " data for patient " + contact.getStudyId() + ". Exit code: " + processReturn.getExitCode());
                    }
                }
            }
        }
    }

    public List<Data> findAllData(String stringFilter)
    {
        if (stringFilter == null || stringFilter.isEmpty())
        {
            return dataRepository.findAll();
        }
        else
        {
            return dataRepository.search(stringFilter);
        }
    }

    public long countContacts()
    {
        return contactRepository.count();
    }

    public void saveContact(Contact contact)
    {
        if (contact == null)
        {
            System.err.println("Contact is null. Are you sure you have connected your form to the application?");
            return;
        }
        contactRepository.save(contact);
    }

    public void deleteContact(Contact contact)
    {
        contactRepository.delete(contact);
    }

    public List<Contact> findAllContacts(String stringFilter)
    {
        if (stringFilter == null || stringFilter.isEmpty())
        {
            return contactRepository.findAll();
        }
        else
        {
            return contactRepository.search(stringFilter);
        }
    }


    public void saveStatus(Status status)
    {
        if(status == null)
        {
            System.err.println("Status is null.");
            return;
        }

        statusRepository.save(status);
    }

    public void deleteStatus(Status status)
    {
        statusRepository.delete(status);
    }

    public List<Status> findAllStatuses()
    {
        return statusRepository.findAll();
    }

    public void saveData(Data data)
    {
        if(data == null)
        {
            System.err.println("Data is null.");
            return;
        }

        dataRepository.save(data);
    }

    public void deleteData(Data data)
    {
        dataRepository.delete(data);
    }

    public void saveDataPoint(DataPoint dataPoint)
    {
        if(dataPoint == null)
        {
            System.err.println("DataPoint is null.");
            return;
        }

        dataPointRepository.save(dataPoint);
    }

    public void deleteDataPoint(DataPoint dataPoint)
    {
        dataPointRepository.delete(dataPoint);
    }

    public String getLampServerAddress()
    {
        return appConfig.getLampServerAddress();
    }

    public void setLampServerAddress(String lampServerAddress)
    {
        appConfig.setLampServerAddress(lampServerAddress);
    }

    public String getLampAccessKey()
    {
        return appConfig.getLampAccessKey();
    }

    public void setLampAccessKey(String lampAccessKey)
    {
        appConfig.setLampAccessKey(lampAccessKey);
    }

    public String getLampSecretKey()
    {
        return appConfig.getLampSecretKey();
    }

    public void setLampSecretKey(String lampSecretKey)
    {
        appConfig.setLampSecretKey(lampSecretKey);
    }

    public String getLampStudyId()
    {
        return appConfig.getLampStudyId();
    }

    public void setLampStudyId(String lampStudyId)
    {
        appConfig.setLampStudyId(lampStudyId);
    }

    public String getRecipientEmailAddress()
    {
        return appConfig.getRecipientEmailAddress();
    }

    public void setRecipientEmailAddress(String recipientEmailAddress)
    {
        appConfig.setRecipientEmailAddress(recipientEmailAddress);
    }

    public String getGoogleEmailAddress()
    {
        return appConfig.getGoogleEmailAddress();
    }

    public void setGoogleEmailAddress(String googleEmailAddress)
    {
        appConfig.setGoogleEmailAddress(googleEmailAddress);
    }

    public String getGoogleAppPassword()
    {
        return appConfig.getGoogleAppPassword();
    }

    public void setGoogleAppPassword(String googleAppPassword)
    {
        appConfig.setGoogleAppPassword(googleAppPassword);
    }

    public boolean isServerSet()
    {
        return appConfig.isServerSet();
    }

    public String getDataCacheStatus()
    {
        return appConfig.getStatus();
    }

    public void setDataCacheStatus(String status)
    {
        appConfig.setStatus(status);
    }

    public List<String> getVisualizationTypes()
    {
        return appConfig.getVisualizationTypes();
    }
}
