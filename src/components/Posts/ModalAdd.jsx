import React from "react";
import {Modal, Button, Form, Container} from "react-bootstrap";
import {Formik} from 'formik';
import validator from "../../utils/validator";
import styles from './posts.module.css'
import {useDispatch} from "react-redux";
import {createPost} from "../../redux/actions/postAction";

const ModalAdd = ({show, handleClose}) => {
    const dispatch = useDispatch()

    const createPostHandler = data => {
        dispatch(createPost(data))
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className={'mb-2'}>
                <Modal.Title>Create new post</Modal.Title>
            </Modal.Header>

            <Container className={'mb-3'}>
                <Formik
                    initialValues={{name: '', email: '', text: ''}}
                    validationSchema={validator}
                    onSubmit={values => createPostHandler(values)}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="John"
                                              className={errors.name && touched.name ? styles.inputError : null}
                                              name={'name'}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                />
                                {touched.name && errors.name && <small className={'text-danger'}>{errors.name}</small>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                              placeholder="test@gmail.com"
                                              name={'email'}
                                              className={errors.email && touched.email ? styles.inputError : null}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                />
                                {touched.email && errors.email &&
                                <small className={'text-danger'}>{errors.email}</small>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Text</Form.Label>
                                <Form.Control as="textarea"
                                              rows={3}
                                              placeholder="lorem ipsum dolor"
                                              name={'text'}
                                              className={errors.text && touched.text ? styles.inputError : null}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.text}
                                />
                                {touched.text && errors.text && <small className={'text-danger'}>{errors.text}</small>}
                            </Form.Group>
                            <div className={'d-flex justify-content-evenly mt-4'}>
                                <Button type={'submit'}
                                >
                                    Create
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Modal>
    )
}

export default ModalAdd