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
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

import static com.example.application.data.service.Utilities.createAndRunProcess;
import static com.example.application.data.service.Utilities.sendEmail;

@Service
public class CrmService
{
    private final ContactRepository contactRepository;
    private final StatusRepository statusRepository;
    private final DataRepository dataRepository;
    private final DataPointRepository dataPointRepository;
    //LAMP server settings
    private String lampServerAddress, lampAccessKey, lampSecretKey, lampStudyId;
    //Email settings
    private String recipientEmailAddress, googleEmailAddress, googleAppPassword;
    private boolean serverSet, emailSet;

    public CrmService(ContactRepository contactRepository,
                      StatusRepository statusRepository,
                      DataRepository dataRepository,
                      DataPointRepository dataPointRepository)
    {
        this.contactRepository = contactRepository;
        this.statusRepository = statusRepository;
        this.dataRepository = dataRepository;
        this.dataPointRepository = dataPointRepository;

        serverSet = false;
        emailSet = false;

        saveStatuses();

        //generateData();
        //generateTableForEmail();
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

    private void generateData()
    {
        //Data generation
        String[] trafficLight = new String[]{"🟢", "🟡", "🔴"};
        List<Data> dataList = new ArrayList<>();

        Data data;
        for (int i = 0; i < 5; i++)
        {
            data = new Data();
            data.setGPS(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);
            data.setAccelerometer(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);
            data.setDisplay(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);
            data.setDeviceMotion(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);

            dataList.add(data);
        }

        //Contact + status generation
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

        List<String> firstNames = new ArrayList<>();
        firstNames.add("John");
        firstNames.add("Bob");
        firstNames.add("Alex");

        List<String> lastNames = new ArrayList<>();
        lastNames.add("Snow");
        lastNames.add("Jobs");
        lastNames.add("Fitzgerald");

        int randomNum;
        String studyId, firstName, lastName, email, phoneNum;
        Status status;
        Contact contact;
        for (int i = 0; i < 5; i++)
        {
            studyId = "U" + ((long) Math.floor(Math.random() * 9_000_000_000L) + 1_000_000_000L);

            randomNum = ThreadLocalRandom.current().nextInt(0, 2 + 1);
            firstName = firstNames.get(randomNum);

            randomNum = ThreadLocalRandom.current().nextInt(0, 2 + 1);
            lastName = lastNames.get(randomNum);

            email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@email.com";

            phoneNum = String.valueOf((long) Math.floor(Math.random() * 900_000_000L) + 100_000_000L);

            randomNum = ThreadLocalRandom.current().nextInt(0, 2 + 1);
            status = statuses.get(randomNum);

            contact = new Contact();
            contact.setStudyId(studyId);
            contact.setFirstName(firstName);
            contact.setLastName(lastName);
            contact.setEmail(email);
            contact.setPhoneNum(phoneNum);
            contact.setStatus(status);

            data = dataList.get(i);
            data.setParticipantStudyId(studyId);
            data.setContact(contact);

            this.saveData(data);
        }

        //DataPoints generation
        DataPoint dataPoint;
        LocalDate date;
        List<Contact> contactList = contactRepository.findAll();
        dataList = dataRepository.findAll();
        for (int i = 0; i < 5; i++)
        {
            contact = contactList.get(i);
            data = dataList.get(i);

            date = LocalDate.of(2023, 3, 9);
            for (int j = 0; j < 10; j++)
            {
                dataPoint = new DataPoint();
                dataPoint.setParticipantStudyId(contact.getStudyId());
                dataPoint.setDate(date.toString());
                dataPoint.setGPS(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);
                dataPoint.setAccelerometer(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);
                dataPoint.setDisplay(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);
                dataPoint.setDeviceMotion(trafficLight[ThreadLocalRandom.current().nextInt(0, 2 + 1)]);
                dataPoint.setData(data);

                date = date.minusDays(1);

                this.saveDataPoint(dataPoint);
            }
        }
    }

    public boolean setEmail()
    {
        emailSet = true;

        return sendEmail(googleEmailAddress,
                googleAppPassword,
                recipientEmailAddress,
                "Receiving email set.",
                "You email has been set to receive notifications from the LAMPView application.\n" +
                        "If you think this is a mistake, please contact the study administrators at " + googleEmailAddress);
    }

    public void setServer()
    {
        serverSet = true;

        getStudyParticipants();
    }

    private void getStudyParticipants()
    {
        ProcessReturn processReturn = createAndRunProcess("python3",
                "get_study_participants.py",
                lampAccessKey,
                lampSecretKey,
                lampServerAddress,
                lampStudyId);

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

    @Scheduled(cron = "0 0 9 * * ?")
    private void getDataQualityForPreviousDay()
    {
        if (serverSet)
        {
            ProcessReturn processReturn;
            LocalDateTime date, currentDate = LocalDateTime.now();
            Duration timeDifference;
            DataPoint dataPoint;
            long hoursDifference;

            List<Contact> contacts = findAllContacts("");
            for (Contact contact : contacts)
            {
                System.out.println("Patient: " + contact.getStudyId());

                processReturn = createAndRunProcess("python3",
                        "get_participant_last_data_time.py",
                        lampAccessKey,
                        lampSecretKey,
                        lampServerAddress,
                        contact.getStudyId());

                if(processReturn.getResults().size() == 0)
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

            if (emailSet)
            {
                sendEmail(googleEmailAddress,
                        googleAppPassword,
                        recipientEmailAddress,
                        "LAMPView report " + currentDate.toLocalDate(),
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

            if(dataPoints.size() > 0)
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
        String returnString = "";

        for (int i = 0; i < contactList.size(); i++)
        {
            data = contactList.get(i).getData();

            tableValues[i][0] = data.getGPS();
            tableValues[i][1] = data.getAccelerometer();
            tableValues[i][2] = data.getDisplay();
            tableValues[i][3] = data.getDeviceMotion();
        }

        /*returnString += "ID\tGPS\tAccelerometer\tDisplay\tDevice motion\n";
        for (int i = 0; i < contactList.size(); i++)
        {
            returnString += contactList.get(i).getStudyId() + "\t"
                    + tableValues[i][0] + "\t"
                    + tableValues[i][1] + "\t"
                    + tableValues[i][2] + "\t"
                    + tableValues[i][3] + "\n";
        }

        return returnString;*/

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
        return lampServerAddress;
    }

    public void setLampServerAddress(String lampServerAddress)
    {
        this.lampServerAddress = lampServerAddress;
    }

    public String getLampAccessKey()
    {
        return lampAccessKey;
    }

    public void setLampAccessKey(String lampAccessKey)
    {
        this.lampAccessKey = lampAccessKey;
    }

    public String getLampSecretKey()
    {
        return lampSecretKey;
    }

    public void setLampSecretKey(String lampSecretKey)
    {
        this.lampSecretKey = lampSecretKey;
    }

    public String getLampStudyId()
    {
        return lampStudyId;
    }

    public void setLampStudyId(String lampStudyId)
    {
        this.lampStudyId = lampStudyId;
    }

    public String getRecipientEmailAddress()
    {
        return recipientEmailAddress;
    }

    public void setRecipientEmailAddress(String recipientEmailAddress)
    {
        this.recipientEmailAddress = recipientEmailAddress;
    }

    public String getGoogleEmailAddress()
    {
        return googleEmailAddress;
    }

    public void setGoogleEmailAddress(String googleEmailAddress)
    {
        this.googleEmailAddress = googleEmailAddress;
    }

    public String getGoogleAppPassword()
    {
        return googleAppPassword;
    }

    public void setGoogleAppPassword(String googleAppPassword)
    {
        this.googleAppPassword = googleAppPassword;
    }

    public boolean isServerSet()
    {
        return serverSet;
    }
}