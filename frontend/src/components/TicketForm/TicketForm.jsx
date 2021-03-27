import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './TicketForm.scss';
import { toast } from 'react-toastify';

const TICKET_SUCCESS_MESSAGES = {
    create: 'Ticket created successfully',
    update: 'Ticket updated successfully',
};
const TICKET_ERROR_MESSAGES = {
    create: 'Ticket could not be created',
    update: 'Ticket could not be updated',
};
export default class TicketForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: this.props.match.url.includes('update') ? 'update' : 'create',
            id: this.props.match.params.id,
            ticketData: {},
        };
    }

    componentDidMount() {
        if (this.state.mode === 'update') {
            this.fetchTicketData(this.state.id);
        }
    }

    fetchTicketData = (id) => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/getTicketById/${id}`,
                { timeout: 1000 }
            )
            .then((response) => {
                this.setState({ ticketData: response.data });
            })
            .catch((error) => {
                console.error(error);
            });

        console.log(this.state);
    };

    handleSubmit = (e) => {
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

        let operation = this.state.mode === 'update' ? this.updateTicket : this.createTicket;

        operation(formData);
    }

    createTicket = (formData) => {
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
                    toast.success(TICKET_SUCCESS_MESSAGES[this.state.mode]);
                } else {
                    toast.error(TICKET_ERROR_MESSAGES[this.state.mode]);
                }

                // take back to homepage
                this.props.history.push('/');
            })
            .catch((error) => {
                console.error(error);

                // show toast
                toast.error(TICKET_ERROR_MESSAGES[this.state.mode]);
            });
    };

    updateTicket = (formData) => {
        axios
            .put(
                `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/updateTicket/${this.state.id}`,
                formData,
                { timeout: 1000 }
            )
            .then((response) => {
                console.log(response);

                // show toast
                if (response.status === 200) {
                    toast.success(TICKET_SUCCESS_MESSAGES[this.state.mode]);
                } else {
                    toast.error(TICKET_ERROR_MESSAGES[this.state.mode]);
                }

                // take back to homepage
                this.props.history.push('/');
            })
            .catch((error) => {
                console.error(error);

                // show toast
                toast.error(TICKET_ERROR_MESSAGES[this.state.mode]);
            });
    }

    render() {
        return (
            <div id="formWrapper">
                <div id="formTitle">
                    <h2>
                        {`${this.state.mode
                            .charAt(0)
                            .toUpperCase()}${this.state.mode.slice(1)}`}{' '}
                        Ticket
                    </h2>
                    <span>
                        <span className="required">*</span> Required Information
                    </span>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>
                        Ticket Author <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Author Name"
                        name="ticketAuthor"
                        defaultValue={this.state.ticketData.ticketAuthor}
                        required
                    />

                    <Form.Label>
                        Ticket Title <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ticket Title"
                        name="ticketTitle"
                        defaultValue={this.state.ticketData.ticketTitle}
                        required
                    />

                    <Form.Label>
                        Ticket Status <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ticket Status"
                        defaultValue={this.state.ticketData.ticketStatus}
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
                        defaultValue={this.state.ticketData.issueDescription}
                        name="ticketDescription"
                        required
                    />

                    <Button variant="primary" type="submit">
                        {`${this.state.mode
                            .charAt(0)
                            .toUpperCase()}${this.state.mode.slice(1)}`}
                    </Button>
                </Form>
            </div>
        );
    }
}
