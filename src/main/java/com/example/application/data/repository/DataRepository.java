package com.example.application.data.repository;

import com.example.application.data.entity.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DataRepository extends JpaRepository<Data, Integer>
{
    @Query("select d from Data d " +
            "where lower(d.participantStudyId) like lower(concat('%', :searchTerm, '%'))")
    List<Data> search(@Param("searchTerm") String searchTerm);
}
