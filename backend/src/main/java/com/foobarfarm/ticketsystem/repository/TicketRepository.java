package com.foobarfarm.ticketsystem.repository;

import com.foobarfarm.ticketsystem.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    @Override
    Optional<Ticket> findById(Long aLong);

    @Override
    List<Ticket> findAll();

    @Override
    Ticket save(Ticket ticket);
}
