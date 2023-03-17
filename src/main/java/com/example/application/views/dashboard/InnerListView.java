package com.example.application.views.dashboard;

import com.example.application.data.entity.Data;
import com.example.application.data.entity.DataPoint;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

public class InnerListView extends VerticalLayout
{
    final Grid<DataPoint> dataPointGrid = new Grid<>(DataPoint.class);
    Data data;

    public InnerListView()
    {
        addClassName("inner-list-view");

        configureGrid();

        add(dataPointGrid);
    }

    private void configureGrid()
    {
        dataPointGrid.addClassName("data-point-grid");

        dataPointGrid.setColumns("date", "GPS", "accelerometer", "display", "deviceMotion");
        dataPointGrid.getColumns().forEach(column -> column.setAutoWidth(true));
    }

    public void setData(Data data)
    {
        this.data = data;

        if(data == null)
        {
            return;
        }

        updateList();
    }

    private void updateList()
    {
        dataPointGrid.setItems(data.getDataPoints());
    }
}
