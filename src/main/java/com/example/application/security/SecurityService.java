package com.example.application.security;

import com.vaadin.flow.spring.security.AuthenticationContext;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class SecurityService
{
    private final AuthenticationContext authenticationContext;

    public SecurityService(AuthenticationContext authenticationContext)
    {
        this.authenticationContext = authenticationContext;
    }

    public UserDetails getAuthenticatedUser()
    {
        if (authenticationContext.getAuthenticatedUser(UserDetails.class).isPresent())
        {
            return authenticationContext.getAuthenticatedUser(UserDetails.class).get();
        }
        // Anonymous or no authentication.
        return null;
    }

    public void logout()
    {
        authenticationContext.logout();
    }
}
