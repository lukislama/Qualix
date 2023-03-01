package com.example.application.data.service;

import com.example.application.data.entity.Contact;
import com.example.application.data.entity.Status;
import com.example.application.data.repository.ContactRepository;
import com.example.application.data.repository.StatusRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class CrmService
{
    private final ContactRepository contactRepository;
    private final StatusRepository statusRepository;

    public CrmService(ContactRepository contactRepository,
                      StatusRepository statusRepository)
    {
        this.contactRepository = contactRepository;
        this.statusRepository = statusRepository;

        generateContacts();
    }

    private void generateContacts()
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

            this.saveContact(contact);
        }
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

    public long countContacts()
    {
        return contactRepository.count();
    }

    public void deleteContact(Contact contact)
    {
        contactRepository.delete(contact);
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

    public void saveStatus(Status status)
    {
        if(status == null)
        {
            System.err.println("Company is null.");
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
}