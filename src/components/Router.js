import { Routes, Route } from 'react-router-dom'

import About from '../pages/About';
import Users from '../pages/Users';
import Home from '../pages/Home'
import MainPage from '../pages/MainPage';

const Router = () => {
  return (
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/users' element={<Users />} />
        <Route path='/about' element={<About />} />
      </Routes>
  );
};

export default Router;