import React from "react";
import Card from 'react-bootstrap/Card';

export default class Ticket extends React.Component {
    // pass in ticket data
    constructor(props) {
        super(props);

        this.state = { data: props.data };
    }

    render() {
        return (
                
                <div className="cardContainer">
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title>{this.state.data.ticketTitle}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.state.data.ticketAuthor}</Card.Subtitle>
                            <Card.Text>
                                {this.state.data.issueDescription}
                        </Card.Text>
                            <Card.Link href="#">Delete Issue</Card.Link>
                            <Card.Link href="#">Edit Issue</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
        );
    }
}
