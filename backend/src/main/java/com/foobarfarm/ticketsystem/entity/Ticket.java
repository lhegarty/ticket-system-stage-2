package com.foobarfarm.ticketsystem.entity;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Ticket {
    // default no-parameter constructor for jpa
    public Ticket() {
    }

    public Ticket(long id, String ticketAuthor, String ticketTitle, LocalDateTime timestamp, String ticketStatus, String issueDescription) {
        this.id = id;
        this.ticketAuthor = ticketAuthor;
        this.ticketTitle = ticketTitle;
        this.timestamp = timestamp;
        this.ticketStatus = ticketStatus;
        this.issueDescription = issueDescription;
    }

    // Id field
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String ticketAuthor;

    private String ticketTitle;

    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime timestamp;

    private String ticketStatus;

    private String issueDescription;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTicketAuthor() {
        return ticketAuthor;
    }

    public void setTicketAuthor(String ticketAuthor) {
        this.ticketAuthor = ticketAuthor;
    }

    public String getTicketTitle() {
        return ticketTitle;
    }

    public void setTicketTitle(String ticketTitle) {
        this.ticketTitle = ticketTitle;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getTicketStatus() {
        return ticketStatus;
    }

    public void setTicketStatus(String ticketStatus) {
        this.ticketStatus = ticketStatus;
    }

    public String getIssueDescription() {
        return issueDescription;
    }

    public void setIssueDescription(String issueDescription) {
        this.issueDescription = issueDescription;
    }
}
