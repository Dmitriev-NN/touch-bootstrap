import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import { Navibar } from './components/Navibar';
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home'
import MainPage from './pages/MainPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/users' element={<Users />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
