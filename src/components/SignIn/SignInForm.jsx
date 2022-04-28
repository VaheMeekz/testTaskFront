import React, {useState} from "react";
import styles from './signin.module.css'
import {Form, Col, Row, Button, Alert} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { goSignIn } from "../../redux/actions/authAction";

const SignInForm = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const loginHandler = e => {
        e.preventDefault()
        if (!data.username.trim() || !data.password.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goSignIn(data))
        }   
    }

    return (
        <div className={styles.wrapperBox}>
            <Form className={styles.innerBox} onChange={onChangeHandler} onSubmit={loginHandler}>
                {
                    error
                        ? <Alert variant={'danger'}>Invalid username/password</Alert>
                        : null
                }
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type={'text'} name={'username'}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" name={'password'}/>
                    </Col>
                </Form.Group>
                <div className={'d-flex justify-content-end'}>
                    <Button variant={'danger'}
                            type={'submit'}
                    >
                        Sign In
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default SignInForm