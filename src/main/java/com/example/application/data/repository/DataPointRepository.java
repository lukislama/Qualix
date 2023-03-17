package com.example.application.data.repository;

import com.example.application.data.entity.DataPoint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataPointRepository extends JpaRepository<DataPoint, Integer>
{
}
