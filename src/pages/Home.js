import React from 'react';
import Slider from '../components/Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'


export const Home = () => {
  return (
    <>
      <h1>
        Home page
      </h1>

      <Slider />

      <Container className='d-flex justify-content-center py-5'>
        <Row>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Strange Planet</Card.Title>
                <Card.Text>
                  "One of the points of Strange Planet is that this is all
                  (gestures in every direction) delightfully odd.
                </Card.Text>
                <Button variant='primary'>It's really funny!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Strange Planet</Card.Title>
                <Card.Text>
                  It's wonderful how much complexity we [humans] have created," Pyle tells me
                  in an email conversation — and yes, those parentheticals are his.
                </Card.Text>
                <Button variant='primary'>It's really funny!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Strange Planet</Card.Title>
                <Card.Text>
                  Pyle was inspired to create the series one day as he and his wife were
                  preparing to have guests over — and they began hiding their possessions
                  to make their small New York City apartment appear as clean as possible.
                </Card.Text>
                <Button variant='primary'>It's really funny!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Strange Planet</Card.Title>
                <Card.Text>
                  "I realized this would make an excellent comic. I drew this one based on the
                  experience, and the series was born," he says. He began posting the comics on
                  social media in February, and in less than a year, the series has amassed over
                  4.7 million followers on Instagram.
                </Card.Text>
                <Button variant='primary'>It's really funny!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Jumbotron />
    </>
  );
};

export default Home;