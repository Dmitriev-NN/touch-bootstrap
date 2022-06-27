import React from 'react';
import Slider from '../components/Slider';
import Cards from '../components/Cards/Cards';



export const Home = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Home page</h1>
      <Slider />
      <Cards />
    </div>
  );
};

export default Home;