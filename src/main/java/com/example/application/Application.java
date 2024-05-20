package com.example.application;

import com.example.application.data.service.AppConfig;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.component.page.Push;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * The entry point of the Spring Boot application.
 * <p>
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 */
@SpringBootApplication
@EnableScheduling
@EnableConfigurationProperties(AppConfig.class)
@Theme(value = "flowcrmtutorial")
@PWA(
        name = "Qualix",
        shortName = "Qualix",
        offlinePath="offline.html",
        offlineResources = { "./images/offline.png"}
)
@Push
public class Application implements AppShellConfigurator
{
    public static void main(String[] args)
    {
        SpringApplication.run(Application.class, args);
    }
}
