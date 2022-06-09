import { Carousel } from "react-bootstrap";

const pics = [
  'https://sun9-35.userapi.com/s/v1/ig2/B3Eg2IN3ciZZG6kV7bAsXV7_Madf56ykXRj0NGmFI1OZpUckHamFkJSGHi2n_nb4Z9nIvotFuAuXPDFOtZpeJeUk.jpg?size=1080x1080&quality=95&type=album', 
  'https://sun9-46.userapi.com/s/v1/ig2/K4-iNc3AAf6xBHzAMKcXW7sA1J6ihFN5rRsIwU6Igl92rl3U8rlkPjFW4a_qGXpmqSKmf3ymvCff27ABAngIbEwk.jpg?size=1080x1080&quality=95&type=album',
  'https://sun1-47.userapi.com/s/v1/ig2/gmn_mQLBTg5oUelCJQBVevsB3u4rI6WUobjffaPA1Ru1ZjCpm4n-QMVWKReZ8LrVbG-gGTk7gJpTjEbCFuhapGy3.jpg?size=1080x1080&quality=96&type=album',
  'https://sun9-15.userapi.com/s/v1/ig2/IXaFeV9IgfgowM-NwZA-IZTVVOGhaXQr3KLF06lVxe7_cVfpCsyneBt4aXCSspkXljQ-kHK7eqq9ORWA1KfZWlq7.jpg?size=1080x1080&quality=95&type=album'
];

const imgStyles = `w-responsive text-center mx-auto p-1 mt-1 w-50`;

const Slider = () => {
  return (
      <Carousel fade>
        <Carousel.Item>
          <img className={imgStyles} src={pics[0]} alt="Carousel img" />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={imgStyles} src={pics[1]} alt="Carousel img" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={imgStyles} src={pics[2]} alt="Carousel img" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={imgStyles} src={pics[3]} alt="Carousel img" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Slider;



