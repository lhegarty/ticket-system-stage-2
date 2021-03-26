import axios from "axios";
import React from "react";
import Ticket from "../Ticket/Ticket";
import TicketModal from '../TicketModal/TicketModal';
import Toast from 'react-bootstrap/Toast';
import LoadingSpinner from "./loading-buffering.gif";
import "./TicketOverview.scss";

export default class TicketOverview extends React.Component {
    constructor() {
        super();

        this.state = {
            isFetchingTickets: true,
            tickets: [],
            toasts: []
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

    displayToast = () => {
        this.state.toasts.push(
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
        );
    }

    renderTickets() {
        if (this.state.tickets.length) {
            return (<>
                {/* <TicketModal /> */}

                <h2>Tickets:</h2>

                <div className="ticketContainer">
                    {
                        this.state.tickets.map((ticket) => {
                            return <Ticket
                                data={ticket}
                                key={ticket.id}
                                toastCallback={this.displayToast}
                            />
                        })
                    }
                </div>
            </>
            )
        } else {
            return <p>No Tickets Found.</p>
        }
    }

    render() {
        return (
            <>
                <div>
                    {this.state.isFetchingTickets ? <img src={LoadingSpinner}></img> : this.renderTickets()}
                </div>
            </>
        );
    }
}
