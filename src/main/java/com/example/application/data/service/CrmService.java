package com.example.application.data.service;

import com.example.application.data.entity.Contact;
import com.example.application.data.entity.Data;
import com.example.application.data.entity.DataPoint;
import com.example.application.data.entity.Status;
import com.example.application.data.repository.ContactRepository;
import com.example.application.data.repository.DataPointRepository;
import com.example.application.data.repository.DataRepository;
import com.example.application.data.repository.StatusRepository;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

@Service
public class CrmService
{
    private final ContactRepository contactRepository;
    private final StatusRepository statusRepository;
    private final DataRepository dataRepository;
    private final DataPointRepository dataPointRepository;
    private String lampServerAddress, lampAccessKey, lampSecretKey, lampStudyId;
    private boolean serverSet;

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

        saveStatuses();

        //generateData();
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

    public void setServer()
    {
        serverSet = true;

        getStudyParticipants();
    }

    private void getStudyParticipants()
    {
        ProcessBuilder processBuilder = new ProcessBuilder("python3",
                "get_study_participants.py",
                lampAccessKey,
                lampSecretKey,
                lampServerAddress,
                lampStudyId);

        Process process;
        try
        {
            process = processBuilder.start();
        }
        catch (IOException e)
        {
            System.err.println("An error occurred while getting study participants.");

            e.printStackTrace();
            return;
        }

        List<String> results = new BufferedReader(
                new InputStreamReader(process.getInputStream(), StandardCharsets.UTF_8))
                .lines()
                .collect(Collectors.toList());

        int exitCode;
        try
        {
            exitCode = process.waitFor();
        }
        catch (InterruptedException e)
        {
            System.err.println("An error occurred while getting study participants.");

            e.printStackTrace();
            return;
        }

        if(exitCode == 0)
        {
            Contact contact;
            for (String participantId : results)
            {
                contact = new Contact();
                contact.setStudyId(participantId);
                contact.setFirstName("Change me");
                contact.setLastName("Change me");
                contact.setEmail("change@me.com");
                contact.setPhoneNum("0000000000");
                contact.setStatus(findAllStatuses().stream()
                        .filter(e -> e.getName().equals("In study"))
                        .collect(Collectors.toList())
                        .get(0));

                this.saveContact(contact);
            }
        }
        else
        {
            System.err.println("An error occurred while getting study participants.");
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
}