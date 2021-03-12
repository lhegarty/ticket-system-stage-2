package com.foobarfarm.ticketsystem.service;

import com.foobarfarm.ticketsystem.entity.Ticket;
import com.foobarfarm.ticketsystem.repository.TicketRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    private TicketRepository repository;

    public TicketService(TicketRepository repository) {
        this.repository = repository;
    }

    public ResponseEntity<Ticket> createTicket(Ticket ticket) {
        Ticket createdTicket = this.repository.save(ticket);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdTicket.getId()).toUri();

        return ResponseEntity.created(location).body(ticket);
    }

    public ResponseEntity<List<Ticket>> getAllTickets() {
        List<Ticket> ticketList = this.repository.findAll();

        return !ticketList.isEmpty() ? ResponseEntity.ok(ticketList) : ResponseEntity.notFound().build();
    }

    public ResponseEntity<Ticket> getTicketById(Long id) {
        Optional<Ticket> ticketOptional = this.repository.findById(id);

        if (!ticketOptional.isPresent())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok().body(ticketOptional.get());
    }

    public ResponseEntity<Ticket> updateTicket(Ticket ticket, Long id) {
        Optional<Ticket> ticketOptional = this.repository.findById(id);

        if (!ticketOptional.isPresent())
            return ResponseEntity.notFound().build();

        ticket.setId(id);

        Ticket updatedTicket = this.repository.save(ticket);

        return ResponseEntity.ok().body(updatedTicket);
    }

    public ResponseEntity deleteTicket(Long id) {
        Optional<Ticket> ticketOptional = this.repository.findById(id);

        if (!ticketOptional.isPresent())
            return ResponseEntity.notFound().build();
        
        this.repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
