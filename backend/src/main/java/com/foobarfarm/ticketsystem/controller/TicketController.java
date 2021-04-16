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

    @GetMapping("/getAllTickets")
    public ResponseEntity<List<Ticket>> getAllTickets() {
        return this.ticketService.getAllTickets();
    }

    @GetMapping("/getTicketById/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
        return this.ticketService.getTicketById(id);
    }

    @PostMapping("/createTicket")
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        return this.ticketService.createTicket(ticket);
    }

    @PutMapping("/updateTicket/{id}")
    public ResponseEntity<Ticket> updateTicket(@RequestBody Ticket ticket, @PathVariable Long id) {
        return this.ticketService.updateTicket(ticket, id);
    }

    @DeleteMapping("/deleteTicket/{id}")
    public ResponseEntity<Ticket> deleteTicket(@PathVariable Long id) {
        return this.ticketService.deleteTicket(id);
    }
}
