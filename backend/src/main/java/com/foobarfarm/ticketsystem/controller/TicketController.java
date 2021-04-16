package com.foobarfarm.ticketsystem.controller;

import com.foobarfarm.ticketsystem.entity.Ticket;
import com.foobarfarm.ticketsystem.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping("/api/getAllTickets")
    public ResponseEntity<List<Ticket>> getAllTickets() {
        return this.ticketService.getAllTickets();
    }

    @GetMapping("/api/getTicketById/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
        return this.ticketService.getTicketById(id);
    }

    @PostMapping("/api/createTicket")
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        return this.ticketService.createTicket(ticket);
    }

    @PutMapping("/api/updateTicket/{id}")
    public ResponseEntity<Ticket> updateTicket(@RequestBody Ticket ticket, @PathVariable Long id) {
        return this.ticketService.updateTicket(ticket, id);
    }

    @DeleteMapping("/api/deleteTicket/{id}")
    public ResponseEntity<Ticket> deleteTicket(@PathVariable Long id) {
        return this.ticketService.deleteTicket(id);
    }
}
