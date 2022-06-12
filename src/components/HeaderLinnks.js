import React from 'react';
import {Nav} from 'react-bootstrap'

const HeaderLinnks = () => {
  return (
    <>
     <Nav>
        <Nav.Link href='/home'>Home</Nav.Link>
        <Nav.Link href='/users'>Users</Nav.Link>
        <Nav.Link href='/about'>About</Nav.Link>
    </Nav>
    </>
  );
};

export default HeaderLinnks;