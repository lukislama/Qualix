package com.example.application.data.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class Utilities
{
    public static ProcessReturn createAndRunProcess(String ... args)
    {
        ProcessReturn processReturn = new ProcessReturn(null, -1);
        ProcessBuilder processBuilder = new ProcessBuilder(args);

        Process process;
        try
        {
            process = processBuilder.start();
        }
        catch (IOException e)
        {
            e.printStackTrace();
            return processReturn;
        }

        List<String> results = new BufferedReader(
                new InputStreamReader(process.getInputStream(), StandardCharsets.UTF_8))
                .lines()
                .toList();

        processReturn.setResults(results);

        int exitCode;
        try
        {
            exitCode = process.waitFor();
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
            return processReturn;
        }

        processReturn.setExitCode(exitCode);

        return processReturn;
    }
}
