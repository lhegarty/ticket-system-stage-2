package com.foobarfarm.ticketsystem.service;

import com.foobarfarm.ticketsystem.entity.Ticket;
import com.foobarfarm.ticketsystem.repository.TicketRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Service
public class TicketService {
    private TicketRepository repository;

    public TicketService(TicketRepository repository) {
        this.repository = repository;
    }

    public ResponseEntity<Object> createTicket(Ticket ticket) {
        Ticket createdTicket = this.repository.save(ticket);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdTicket.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    public List<Ticket> getAllTickets() {
        return this.repository.findAll();
    }

    public Ticket getTicketById(Long id) {
        //change
        return this.repository.findById(id).get();
    }
}
