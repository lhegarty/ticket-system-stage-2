import axios from "axios";
import React from "react";
import Ticket from "../Ticket/Ticket";
import LoadingSpinner from "./loading-buffering.gif";

export default class TicketOverview extends React.Component {
    constructor() {
        super();

        this.state = {
            isFetchingTickets: true,
            tickets: [],
        };
    }

    /**
     * Lifecycle method run when component mounted
     */
    componentDidMount() {
        // fetch recipes
        this.useAxiosToFetchTickets();
    }

    async useAxiosToFetchTickets() {
        axios.get(
            `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/getAllTickets`,
            { timeout: 1000 }
        )
            .then(response => {
                this.setState({
                    isFetchingTickets: false,
                    tickets: response.data
                });
            })
            .catch(error => {
                console.error(error);

                this.setState({
                    isFetchingTickets: false
                });
            })
    }

    renderTickets() {
        if (this.state.tickets.length) {
            return (<>
                <h2>Tickets:</h2>
                {
                    this.state.tickets.map((ticket) => {
                        return <Ticket data={ticket} key={ticket.id} />
                    })
                }</>
            )
        } else {
            return <p>No Tickets Found.</p>
        }
    }

    render() {
        return (
            <>
                <div>
                    {this.state.isFetchingTickets ? <img src={LoadingSpinner}></img> : ''}

                    {this.renderTickets()}
                </div>
            </>
        );
    }
}
