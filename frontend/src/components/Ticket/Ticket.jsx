import React from "react";

export default class Ticket extends React.Component {
    // pass in ticket data
    constructor(props) {
        super(props);

        this.state = { data: props.data };
    }

    render() {
        return (
            <>
            <div>{this.state.data.id}</div>
            <div>{this.state.data.ticketAuthor}</div>
            <div>{this.state.data.ticketTitle}</div>
            <div>{this.state.data.timestamp}</div>
            <div>{this.state.data.ticketStatus}</div>
            <div>{this.state.data.issueDescription}</div>
            </>
        );
    }
}
