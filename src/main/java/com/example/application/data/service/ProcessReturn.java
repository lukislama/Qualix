package com.example.application.data.service;

import java.util.List;

public class ProcessReturn
{
    private List<String> results;
    private int exitCode;

    public ProcessReturn(List<String> results, int exitCode)
    {
        this.results = results;
        this.exitCode = exitCode;
    }

    public List<String> getResults()
    {
        return results;
    }

    public void setResults(List<String> results)
    {
        this.results = results;
    }

    public int getExitCode()
    {
        return exitCode;
    }

    public void setExitCode(int exitCode)
    {
        this.exitCode = exitCode;
    }
}
