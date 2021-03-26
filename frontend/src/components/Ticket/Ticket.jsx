import React from "react";
import Card from 'react-bootstrap/Card';

export default class Ticket extends React.Component {
    // pass in ticket data
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            visible: true
        };
    }

    removeTicket() {
        this.props.toastCallback();
        // this.setState({ visible: false });
    }

    formatDate = (dateString) => {
        let date = new Date(dateString);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    render() {
        return (
            <>{
                this.state.visible ?
                    <div className="cardContainer">
                        <Card style={{ width: '18rem', margin: '10px' }}>
                            <Card.Body>
                                <Card.Title>{this.state.data.ticketTitle}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.state.data.ticketAuthor}</Card.Subtitle>
                                <Card.Text>
                                    {this.state.data.issueDescription}
                                </Card.Text>
                                <Card.Text>
                                    Created {this.formatDate(this.state.data.timestamp)}
                                </Card.Text>
                                <Card.Link href="#" onClick={() => this.removeTicket()}>Delete Ticket</Card.Link>
                                <Card.Link href="#">Edit Ticket</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    : <></>
            }</>

        );
    }
}
