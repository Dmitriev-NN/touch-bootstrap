import { Container, Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid style={{ color: '#9B9D9E' }} className='d-flex justify-content-around'>
        <Nav><h1>Footer here</h1></Nav>
        <Nav><Nav.Link>Link 1</Nav.Link></Nav>
        <Nav><Nav.Link>Link 2</Nav.Link></Nav>
        <Nav><Nav.Link>Link 3</Nav.Link></Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;