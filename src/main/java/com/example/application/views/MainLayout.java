package com.example.application.views;

import com.example.application.security.SecurityService;
import com.example.application.views.dashboard.DashboardView;
import com.example.application.views.list.ListView;
import com.example.application.views.settings.SettingsView;
import com.example.application.views.visualizations.VisualizationsView;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.HighlightConditions;
import com.vaadin.flow.router.RouterLink;
import org.springframework.security.core.userdetails.UserDetails;

import javax.annotation.PostConstruct;

public class MainLayout extends AppLayout
{
    private final SecurityService securityService;

    private final UserDetails userDetails;

    public MainLayout(SecurityService securityService)
    {
        this.securityService = securityService;

        userDetails = securityService.getAuthenticatedUser();

        if(userDetails == null)
        {
            System.err.println("User detail is not set, this should never happen.");
        }
    }

    @PostConstruct
    public void init()
    {
        createHeader();
        createDrawer();
    }

    private void createHeader()
    {
        H1 logo = new H1("Qualix");
        logo.addClassNames("text-l", "m-m");
        HorizontalLayout header;

        Button logout = new Button("Log out", e -> securityService.logout());
        Span loggedUser = new Span("Welcome " + userDetails.getUsername());
        header = new HorizontalLayout(new DrawerToggle(),
                logo,
                loggedUser,
                logout);

        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.expand(logo);
        header.setWidthFull();
        header.addClassNames("py-0", "px-m");

        addToNavbar(header);
    }
    private void createDrawer()
    {
        if(userDetails.getAuthorities().stream()
                .anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN")))
        {
            RouterLink listView = new RouterLink("List", ListView.class);
            listView.setHighlightCondition(HighlightConditions.sameLocation());

            addToDrawer(new VerticalLayout(
                    new RouterLink("Dashboard", DashboardView.class),
                    listView,
                    new RouterLink("Settings", SettingsView.class),
                    new RouterLink("Visualizations", VisualizationsView.class)));
        }
        else
        {
            addToDrawer(new VerticalLayout(
                    new RouterLink("Dashboard", DashboardView.class),
                    new RouterLink("Visualizations", VisualizationsView.class)));
        }
    }
}
