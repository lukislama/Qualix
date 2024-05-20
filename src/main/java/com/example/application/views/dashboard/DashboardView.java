package com.example.application.views.dashboard;

import com.example.application.data.entity.Data;
import com.example.application.data.service.MainService;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.context.annotation.Scope;

import jakarta.annotation.security.PermitAll;

@org.springframework.stereotype.Component
@Scope("prototype")
@Route(value = "", layout = MainLayout.class)
@PageTitle("Dashboard | Qualix")
@PermitAll
public class DashboardView extends VerticalLayout
{
    final Grid<Data> dataGrid = new Grid<>(Data.class);
    final TextField filterText = new TextField();
    InnerListView innerListView;
    private final MainService service;

    public DashboardView(MainService service)
    {
        this.service = service;
        addClassName("dashboard-view");
        setSizeFull();

        configureGrid();
        configureInnerListView();

        add(
            getToolbar(),
            getContent()
        );

        updateList();
        closeInnerList();
    }

    private void configureGrid()
    {
        dataGrid.addClassName("data-grid");
        dataGrid.setSizeFull();

        dataGrid.setColumns("participantStudyId", "GPS", "accelerometer", "display", "deviceMotion");
        dataGrid.getColumns().forEach(column -> column.setAutoWidth(true));
        dataGrid.asSingleSelect().addValueChangeListener(e -> highlightDataPoint(e.getValue()));
    }

    private void configureInnerListView()
    {
        innerListView = new InnerListView();
        innerListView.setPadding(false);
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

    private Component getContent()
    {
        HorizontalLayout content = new HorizontalLayout(dataGrid, innerListView);

        content.addClassName("content");
        content.setSizeFull();

        return content;
    }

    private void updateList()
    {
        dataGrid.setItems(service.findAllData(filterText.getValue()));
    }


    private void closeInnerList()
    {
        innerListView.setData(null);
        innerListView.setVisible(false);
        removeClassName("highlighted");
    }

    private void highlightDataPoint(Data data)
    {
        if(data == null)
        {
            closeInnerList();
            return;
        }

        innerListView.setData(data);
        innerListView.setVisible(true);
        addClassName("highlighted");
    }
}
