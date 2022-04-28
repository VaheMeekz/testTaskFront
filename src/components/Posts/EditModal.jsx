import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost, getPosts } from "../../redux/actions/postAction";
import { Formik } from "formik";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./posts.module.css";
import * as Yup from "yup";
const EditModal = (props) => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const post = allPosts.filter((i) => i.id === props.id).map((i) => i.text);

  const createPostHandler = (data) => {
    dispatch(editPost(data));
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ text: post }}
          validationSchema={
              Yup.object({
            text: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
          })}
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
                <Form.Label>Text</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="lorem ipsum dolor"
                  name={"text"}
                  className={
                    errors.text && touched.text ? styles.inputError : null
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                />
                {touched.text && errors.text && (
                  <small className={"text-danger"}>{errors.text}</small>
                )}
              </Form.Group>
              <div className={"d-flex justify-content-evenly mt-4"}>
                <Button type={"submit"}>Edit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default EditModal;
