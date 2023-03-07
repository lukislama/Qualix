package com.example.application.views;

import com.example.application.data.entity.Data;
import com.example.application.data.service.CrmService;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;

import javax.annotation.security.PermitAll;

@org.springframework.stereotype.Component
@Scope("prototype")
@Route(value = "", layout = MainLayout.class)
@PageTitle("Dashboard | LAMPView")
@PermitAll
public class DashboardView extends VerticalLayout
{
    final Grid<Data> dataGrid = new Grid<>(Data.class);
    final TextField filterText = new TextField();
    private final CrmService service;

    public DashboardView(CrmService service)
    {
        this.service = service;
        addClassName("dashboard-view");
        setSizeFull();

        configureGrid();

        add(
            getToolbar(),
            getContent()
        );

        updateList();
    }

    private Component getContent()
    {
        HorizontalLayout content = new HorizontalLayout(dataGrid);
        content.addClassName("content");
        content.setSizeFull();

        return content;
    }

    private Component getToolbar()
    {
        filterText.setPlaceholder("Filter by name...");
        filterText.setClearButtonVisible(true);
        filterText.setValueChangeMode(ValueChangeMode.LAZY);
        filterText.addValueChangeListener(e -> updateList());

        HorizontalLayout toolbar = new HorizontalLayout(filterText);
        toolbar.addClassName("toolbar");
        return toolbar;
    }

    private void updateList()
    {
        dataGrid.setItems(service.findAllData(filterText.getValue()));
    }

    private void configureGrid()
    {
        dataGrid.addClassName("data-grid");
        dataGrid.setSizeFull();

        dataGrid.setColumns("participantStudyId", "GPS", "accelerometer", "display", "deviceMotion");

        dataGrid.getColumns().forEach(column -> column.setAutoWidth(true));
    }
}
