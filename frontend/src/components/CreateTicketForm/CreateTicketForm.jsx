import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './CreateTicketForm.scss';
import { toast } from 'react-toastify';

const TICKET_CREATE_SUCCESS_MESSAGE = 'Ticket created successfully';
const TICKET_CREATE_ERROR_MESSAGE = 'Ticket could not be created';

export default class CreateTicketForm extends React.Component {
    createTicket = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();

        const formData = {
            ticketAuthor: form.ticketAuthor.value,
            ticketTitle: form.ticketTitle.value,
            timestamp: new Date().toISOString(),
            ticketStatus: form.ticketStatus.value,
            issueDescription: form.ticketDescription.value,
        };

        axios
            .post(
                `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/createTicket`,
                formData,
                { timeout: 1000 }
            )
            .then((response) => {
                console.log(response);

                // show toast
                if (response.status === 201) {
                    toast.success(TICKET_CREATE_SUCCESS_MESSAGE);
                } else {
                    toast.error(TICKET_CREATE_ERROR_MESSAGE);
                }

                // take back to homepage
                this.props.history.push('/');
            })
            .catch((error) => {
                console.error(error);

                // show toast
                toast.error(TICKET_CREATE_ERROR_MESSAGE);
            });
    };

    render() {
        return (
            <div id="formWrapper">
                <div id="formTitle">
                    <h2>Create Ticket</h2>
                    <span>
                        <span className="required">*</span> Required Information
                    </span>
                </div>
                <Form onSubmit={this.createTicket}>
                    <Form.Label>
                        Ticket Author <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Author Name"
                        name="ticketAuthor"
                        required
                    />

                    <Form.Label>
                        Ticket Title <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ticket Title"
                        name="ticketTitle"
                        required
                    />

                    <Form.Label>
                        Ticket Status <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ticket Status"
                        name="ticketStatus"
                        required
                    />

                    <Form.Label>
                        Ticket Description <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Ticket Description"
                        name="ticketDescription"
                        required
                    />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
