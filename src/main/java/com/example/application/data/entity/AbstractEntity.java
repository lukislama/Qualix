package com.example.application.data.entity;

import org.hibernate.annotations.JdbcTypeCode;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import java.util.UUID;

@MappedSuperclass
public abstract class AbstractEntity
{

    @Id
    @GeneratedValue
    @JdbcTypeCode(java.sql.Types.VARCHAR)
    private UUID id;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    @Override
    public int hashCode()
    {
        if (id != null)
        {
            return id.hashCode();
        }
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj)
    {
        if (!(obj instanceof AbstractEntity other))
        {
            return false; // null or other class
        }

        if (id != null)
        {
            return id.equals(other.id);
        }
        return super.equals(other);
    }
}