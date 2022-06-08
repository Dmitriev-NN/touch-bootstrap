import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import About from '../pages/About';
import Users from '../pages/Users';
import Home from '../pages/Home';


export const Navibar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {/* className='d-flex justify-content-evenly'> */}
                <Navbar.Brand className='ms-5'>WebDevBlog</Navbar.Brand>
                <Navbar.Toggle className='me-5' aria-controls='responsive-navbar-nav' />

                <Nav className='ms-auto flex-row'>
                    <Button className='mx-1' variant='primary' >Log in</Button>
                    <Button className='mx-1' variant='primary'>Exit</Button>
                </Nav>

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                        <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
               
            </Navbar>
        </>
    );
};
