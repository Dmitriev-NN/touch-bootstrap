import { useState } from 'react'
import { Navbar, Nav, Container, Modal, Button, Form, Spinner } from 'react-bootstrap';
//Context
// import AuthContext from '../context/index';
import { AuthContext } from '../context';
import { useContext } from 'react'

import HeaderLinks from './HeaderLinnks'

export const Navibar = () => {
    const { isAuth, setAuth, isLoading } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        setModalShow(true);
    }
    const hideModal = () => {
        setModalShow(false)
    };
    const login = () => {
        localStorage.setItem('auth', 'true');
        setAuth(true);
    }
    const logout = () => {
        localStorage.setItem('auth', 'false');
        setAuth(false);
        console.log('exit')
    }
    const handleSubmit = () => {
        setModalShow(false);
        login();
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="mx-5" fluid>
                    <Navbar.Brand>Strange Planet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        {isAuth ?
                            <>
                                <HeaderLinks />

                                <Nav className='ms-auto'>
                                    <Nav.Link
                                        href='#exit'
                                        onClick={logout}>
                                        Exit
                                    </Nav.Link>
                                </Nav>
                            </>
                            :
                            <>
                                <Nav className='ms-auto'>
                                    <Nav.Link
                                        className='ms-auto'
                                        href='#login'
                                        onClick={showModal}>
                                        Login
                                    </Nav.Link>
                                </Nav>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={modalShow} onHide={hideModal}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Let here be authentification window!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group controlId='validationEmail'>
                            <Form.Label>Email addres</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter your email'
                                autoFocus
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter correct email addres.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId='validationPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter your password'
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Password is incorrect.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

