package com.example.application.views;

import com.example.application.views.list.ListView;
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
import com.vaadin.flow.spring.security.AuthenticationContext;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public class MainLayout extends AppLayout
{
    private final transient AuthenticationContext authenticationContext;
    private UserDetails userDetails;

    public MainLayout(AuthenticationContext authenticationContext)
    {
        this.authenticationContext = authenticationContext;

        Optional<UserDetails> optionalUserDetails = authenticationContext.getAuthenticatedUser(UserDetails.class);
        optionalUserDetails.ifPresent(details -> userDetails = details);

        if(optionalUserDetails.isEmpty())
        {
            System.err.println("User detail is not set, this should never happen.");
        }

        createHeader();
        createDrawer();
    }

    private void createHeader()
    {
        H1 logo = new H1("LAMPView");
        logo.addClassNames("text-l", "m-m");
        HorizontalLayout header;

        if (authenticationContext.isAuthenticated())
        {
            Button logout = new Button("Log out", e -> this.authenticationContext.logout());
            Span loggedUser = new Span("Welcome " + userDetails.getUsername());
            header = new HorizontalLayout(new DrawerToggle(),
                    logo,
                    loggedUser,
                    logout);
        }
        else
        {
            header = new HorizontalLayout(new DrawerToggle(),
                    logo);
        }

        header.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        header.expand(logo);
        header.setWidthFull();
        header.addClassNames("py-0", "px-m");

        addToNavbar(header);
    }
    private void createDrawer()
    {
        if(userDetails
                .getUsername()
                .equals("admin"))
        {
            RouterLink listView = new RouterLink("List", ListView.class);
            listView.setHighlightCondition(HighlightConditions.sameLocation());

            addToDrawer(new VerticalLayout(
                    new RouterLink("Dashboard", DashboardView.class),
                    listView));

            return;
        }

        addToDrawer(new VerticalLayout(
                new RouterLink("Dashboard", DashboardView.class)));
    }
}
