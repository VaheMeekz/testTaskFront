import React, {useState} from 'react'
import {Button} from "react-bootstrap";
import styles from './posts.module.css'
import ModalAdd from "./ModalAdd";

const AddPost = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.addPostField}>
            <Button variant="danger" onClick={handleShow}>Add</Button>
            <ModalAdd handleClose={handleClose}
                      show={show}
            />
        </div>
    )
}

export default AddPost