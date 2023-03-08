package com.example.application.data.entity;

import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;

@Entity
public class Data extends AbstractEntity
{
    @NotEmpty
    private String participantStudyId = "";

    @NotEmpty
    private String GPS = "";

    @NotEmpty
    private String accelerometer = "";

    @NotEmpty
    private String display = "";

    @NotEmpty
    private String deviceMotion = "";

    public String getParticipantStudyId()
    {
        return participantStudyId;
    }

    public void setParticipantStudyId(String participantStudyId)
    {
        this.participantStudyId = participantStudyId;
    }

    public String getGPS()
    {
        return GPS;
    }

    public void setGPS(String GPS)
    {
        this.GPS = GPS;
    }

    public String getAccelerometer()
    {
        return accelerometer;
    }

    public void setAccelerometer(String accelerometer)
    {
        this.accelerometer = accelerometer;
    }

    public String getDisplay()
    {
        return display;
    }

    public void setDisplay(String display)
    {
        this.display = display;
    }

    public String getDeviceMotion()
    {
        return deviceMotion;
    }

    public void setDeviceMotion(String deviceMotion)
    {
        this.deviceMotion = deviceMotion;
    }
}