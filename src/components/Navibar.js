import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
//Context
import { AuthContext } from '../context/index';
import { useContext } from 'react'

export const Navibar = () => {
    // const [isAuth, setAuth] = useContext(AuthContext);

    const exit = () => {
        // sessionStorage.setItem('auth', 'false');
        // setAuth(false);
        console.log('exit')
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand className='ms-5'>WebDevBlog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/users'>Users</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='#login'>Login</Nav.Link>
                        <Nav.Link href='#exit' onClick={exit}>Exit</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
