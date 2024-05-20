package com.example.application.data.service;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

@ConfigurationProperties(prefix = "qualix")
public class AppConfig
{
    public enum dataCacheStatus
    {
        NOT_BUILT,
        BUILDING,
        BUILT,
        ERROR
    }

    //LAMP server settings
    private String lampServerAddress, lampAccessKey, lampSecretKey, lampStudyId;
    //Email settings
    private String recipientEmailAddress, googleEmailAddress, googleAppPassword;
    private boolean serverSet, emailSet;
    private dataCacheStatus status = dataCacheStatus.NOT_BUILT;
    private final List<String> visualizationTypes = List.of("Accelerometer", "Data_quality");

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

    public void setServerSet(boolean serverSet)
    {
        this.serverSet = serverSet;
    }

    public boolean isEmailSet()
    {
        return emailSet;
    }

    public void setEmailSet(boolean emailSet)
    {
        this.emailSet = emailSet;
    }

    public String getStatus()
    {
        return status.name();
    }

    public void setStatus(String status)
    {
        this.status = dataCacheStatus.valueOf(status);
    }

    public List<String> getVisualizationTypes()
    {
        return visualizationTypes;
    }
}
