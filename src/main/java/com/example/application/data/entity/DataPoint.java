package com.example.application.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
public class DataPoint extends AbstractEntity
{
    @NotEmpty
    private String participantStudyId = "";

    @NotEmpty
    private String date = "";

    @NotEmpty
    private String GPS = "";

    @NotEmpty
    private String accelerometer = "";

    @NotEmpty
    private String display = "";

    @NotEmpty
    private String deviceMotion = "";

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "data_id")
    @NotNull
    @JsonIgnoreProperties({"dataPoints"})
    private Data data;

    public String getParticipantStudyId()
    {
        return participantStudyId;
    }

    public void setParticipantStudyId(String participantStudyId)
    {
        this.participantStudyId = participantStudyId;
    }

    public String getDate()
    {
        return date;
    }

    public void setDate(String date)
    {
        this.date = date;
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

    public Data getData()
    {
        return data;
    }

    public void setData(Data data)
    {
        this.data = data;
    }
}
