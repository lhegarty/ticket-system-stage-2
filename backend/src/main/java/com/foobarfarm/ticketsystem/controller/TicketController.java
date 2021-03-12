package com.foobarfarm.ticketsystem.controller;

import com.foobarfarm.ticketsystem.entity.Ticket;
import com.foobarfarm.ticketsystem.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @RequestMapping("/getAllTickets")
    public ResponseEntity<List<Ticket>> getAllTickets() {
        return new ResponseEntity<List<Ticket>>(this.ticketService.getAllTickets(), HttpStatus.OK);
    }

    @RequestMapping("/getTicketById/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
        return new ResponseEntity<Ticket>(this.ticketService.getTicketById(id), HttpStatus.OK);
    }

    @PostMapping("/createTicket")
    public ResponseEntity<Object> createTicket(@RequestBody Ticket ticket) {
        return this.ticketService.createTicket(ticket);
    }
}
