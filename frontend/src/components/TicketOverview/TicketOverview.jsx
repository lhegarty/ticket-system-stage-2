import axios from 'axios';
import React from 'react';
import Ticket from '../Ticket/Ticket';
import LoadingSpinner from './loading-buffering.gif';
import './TicketOverview.scss';

export default class TicketOverview extends React.Component {
    constructor() {
        super();

        this.state = {
            isFetchingTickets: true,
            tickets: {},
        };
    }

    /**
     * Lifecycle method run when component mounted
     */
    componentDidMount() {
        // fetch recipes
        this.fetchTickets();
    }

    async fetchTickets() {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/getAllTickets`,
                { timeout: 1000 }
            )
            .then((response) => {
                let tickets = {};

                // id: {data}
                for (let ticket of response.data) {
                    tickets[ticket.id] = ticket;
                }

                this.setState({
                    isFetchingTickets: false,
                    tickets: tickets,
                });
            })
            .catch((error) => {
                console.error(error);

                this.setState({
                    isFetchingTickets: false,
                });
            });
    }

    removeTicketFromState = (id) => {
        let tempTickets = this.state.tickets;
        let isFetching = this.state.isFetchingTickets;

        delete tempTickets[id];

        this.setState({
            isFetchingTickets: isFetching,
            tickets: tempTickets,
        });
    };

    renderTickets = () => {
        if (Object.values(this.state.tickets).length) {
            return (
                <>
                    <h2>Tickets:</h2>
                    <div className="ticketContainer">
                        {Object.values(this.state.tickets).map((ticket) => {
                            return (
                                <Ticket
                                    data={ticket}
                                    key={ticket.id}
                                    removeTicketFromState={
                                        this.removeTicketFromState
                                    }
                                />
                            );
                        })}
                    </div>
                </>
            );
        } else {
            return <p>No Tickets Found.</p>;
        }
    };

    render() {
        return (
            <>
                <div>
                    {this.state.isFetchingTickets ? (
                        <img alt="" src={LoadingSpinner}></img>
                    ) : (
                        this.renderTickets()
                    )}
                </div>
            </>
        );
    }
}
