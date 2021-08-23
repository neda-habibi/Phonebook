import React from 'react';
import ListItem from './ListItem';
import { useDispatch } from '../context/dispatch';
import { deleteButtonClicked, editButtonClicked } from '../stateManager/actions';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function List({ data }) {
    const dispatch = useDispatch();
    const items = data.map(item =>
        <ListItem
            key={item.id}
            text= {<Row>
                <Col md={6}>{item.name}</Col>
                <Col md={6}>{item.phone}</Col>
            </Row>}
            onDeleteClick={() => dispatch(deleteButtonClicked(item.id))}
            onEditClick={() => dispatch(editButtonClicked(item))}
        />
    )
    return <ListGroup>{items}</ListGroup>
}