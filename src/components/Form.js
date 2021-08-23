import React from 'react';
import { useDispatch } from '../context/dispatch';
import { saveButtonClicked, cancelButtonClicked } from '../stateManager/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';



export default function AddForm({ id, initialName = '', initialPhone = '' }) {

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.number().required()
    });

    function handleSave({ name, phone }) {
        dispatch(saveButtonClicked({
            name,
            phone,
            id
        }))
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleSave}
            initialValues={{ name: initialName, phone: initialPhone }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
            }) => <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                            name='name'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            value={values.phone}
                            onChange={handleChange}
                            isInvalid={!!errors.phone}
                            name='phone'
                        />
                    </Form.Group>
                    <Button variant="primary" type='submit'>Save</Button>{' '}
                    <Button variant="secondary" onClick={() => dispatch(cancelButtonClicked())}>Cancel</Button>
                </Form>}
        </Formik>
    )
}
