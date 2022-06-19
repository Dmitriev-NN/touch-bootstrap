import React from 'react';
import Slider from '../components/Slider';
import Jumbotron from '../components/Jumbotron';
import Cards from '../components/Cards/Cards';



export const Home = () => {
  return (
    <>
      <h1>
        Home page
      </h1>

      <Slider />
      <Cards />

      <Jumbotron />
    </>
  );
};

export default Home;