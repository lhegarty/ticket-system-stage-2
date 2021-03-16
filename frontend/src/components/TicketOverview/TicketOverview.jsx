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
        this.fetchAllTickets();
    }

    async fetchAllTickets() {        
        const requestUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/getAllTickets`;

        const tickets = await fetch(requestUrl);

        await tickets.json().then((result) => {
            console.log(result)
            this.setState({
                isFetchingTickets: false, 
                tickets: result
             });
        });
    }

    render() {
        return (
            <div>
                <h2>
                    {this.state.isFetchingTickets
                        ? <img src={LoadingSpinner}></img>
                        : "Tickets:"}
                </h2>
                {this.state.tickets.map((ticket) => {
                    return <Ticket data={ticket} key={ticket.id}/>;
                })}
            </div>
        );
    }
}
