import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TICKET_DELETE_SUCCESS_MESSAGE = 'Ticket deleted successfully';
const TICKET_DELETE_ERROR_MESSAGE = 'Ticket could not be deleted';

export default class Ticket extends React.Component {
    // pass in ticket data
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            isModalVisible: false,
        };
    }

    deleteTicket() {
        // call delete resource
        axios
            .delete(
                `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/deleteTicket/${this.state.data.id}`
            )
            .then((response) => {
                // success
                if (response.status === 200) {
                    toast.success(TICKET_DELETE_SUCCESS_MESSAGE);

                    this.toggleModal(false);

                    this.props.removeTicketFromState(this.state.data.id);
                } else {
                    toast.error(TICKET_DELETE_ERROR_MESSAGE);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(TICKET_DELETE_ERROR_MESSAGE);
            });

        // hide modal
        this.toggleModal(false);
    }

    toggleModal = (isVisible) => {
        this.setState({
            isModalVisible: isVisible,
        });
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    render() {
        return (
            <>
                <div className="cardContainer">
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title>
                                {this.state.data.ticketTitle}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {this.state.data.ticketAuthor}
                            </Card.Subtitle>
                            <Card.Text>
                                {this.state.data.ticketStatus}
                            </Card.Text>
                            <Card.Text>
                                {this.state.data.issueDescription}
                            </Card.Text>
                            <Card.Text>
                                Created{' '}
                                {this.formatDate(this.state.data.timestamp)}
                            </Card.Text>
                            <Card.Link
                                style={{ cursor: 'pointer' }}
                                onClick={() => this.toggleModal(true)}
                            >
                                Delete Ticket
                            </Card.Link>
                            <Link
                                to={`/update/${this.state.data.id}`}
                                className="card-link"
                            >
                                Update Ticket
                            </Link>
                        </Card.Body>
                    </Card>
                </div>

                {this.state.isModalVisible ? (
                    <Modal
                        show={this.state.isModalVisible}
                        onHide={() => this.toggleModal(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Ticket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete this ticket?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => this.toggleModal(false)}
                            >
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => this.deleteTicket()}
                            >
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                ) : (
                    <></>
                )}
            </>
        );
    }
}
