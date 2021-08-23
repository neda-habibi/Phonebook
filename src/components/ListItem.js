import React , { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

export default function ListItem({ text, onDeleteClick, onEditClick }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleDelete = () => setShow(true);

    const handleConfirmDelete = () => {
        setShow(false);
        onDeleteClick();
    }

    return (
        <>
            <ListGroup.Item className='list-item'>
                <Row>
                    <Col md={9} xs={6}>
                        {text}
                    </Col>
                    <Col md={3} xs={6}>
                        <Button variant="outline-secondary" onClick={onEditClick}>edit</Button>{' '}
                        <Button variant="outline-danger" onClick={handleDelete}>delete</Button>
                    </Col>
                </Row>
            </ListGroup.Item>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>You're about to delete a record. <br/> Are you sure?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> No </Button>
                    <Button variant="primary" onClick={handleConfirmDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}