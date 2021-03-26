import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './TicketModal.scss';

export default class TicketModal extends React.Component {
    constructor(props) {
        super(props);

        // TODO: use callback from props to make api call when confirm clicked.
        /*
        modalHeader
        modalBody
        confirmButtonText
        confirmButtonCallback
        */
    }

    render() {
        return (
            <Modal show={() => {}} onHide={() => {}}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {}}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
