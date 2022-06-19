import { Container } from 'react-bootstrap'

const Jumbotron = () => {
  return (

    <Container fluid className="jumbotron my-5" >

  //Why we need this?
      <div className='overlay'></div>
  //Why we need this?

      <Container>
        <h1>Strange Planet</h1>
        <p>Nathan Pyle fills the pages of his new book Strange Planet with big eyed,
          bright blue aliens from a planet that shares a lot in common with Earth.
          These aliens sunbathe, sneeze and even wish each other sweet dreams like us,
          but they describe these practices with deadpan technical terminology like
          "sun damage" and "face fluid explosions." The lifegiver aliens even implore
          their offspring to "imagine pleasant nonsense" as they tuck them in for the night.</p>
      </Container>
    </Container>
  )
};

export default Jumbotron;
/*
https://react-bootstrap-v3.netlify.app/components/jumbotron/

<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>;

*/