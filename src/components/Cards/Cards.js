import { Container, Button, Card, Row, Col } from "react-bootstrap";

import { cardsContent as content } from './cardsContent'

const Cards = () => {
  return (
    <div className='cardsWrapper'>
      <Container className='d-flex flex-nowrap justify-content-center py-2'>
        <Row>
          {content.map((i) =>
            <Col key={i.img} style={{ maxWidth: '35vmin' }}>
              <Card>
                <Card.Img variant="top" src={i.img} />
                <Card.Body>
                  <Card.Title>{i.cardTitle}</Card.Title>
                  <Card.Text>{i.cardText}</Card.Text>
                  <Button variant='primary'>{i.btnTitle}</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container >
    </div>
  );
};

export default Cards;