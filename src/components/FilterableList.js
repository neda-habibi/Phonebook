import React, { useState, useMemo } from 'react';
import { addButtonClicked } from '../stateManager/actions';
import List from './List';
import { useDispatch } from '../context/dispatch';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';



export default function FilterableList({ data }) {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const filteredItems = useMemo(() => {
        return data.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
    }, [data, keyword])

    // const filteredItems = data.filter(item => {
    //     return item.name.toLowerCase().includes(keyword.toLowerCase())
    // })

    return (
        <>
            <h1>Phonebook</h1>
            <Form>
                <Form.Row>
                    <Col md='11'>
                        <Form.Control
                            type="text"
                            placeholder="Enter keyword to search"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)} />
                    </Col>
                    <Col md='1'>
                        <Button onClick={() => dispatch(addButtonClicked())}>Add</Button>
                    </Col>
                </Form.Row>
                <br />
                <List data={filteredItems} />
            </Form>
        </>
    )
}