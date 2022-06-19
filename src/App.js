import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Navibar } from './components/Navibar';
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home'
import MainPage from './pages/MainPage';
//Context
import { AuthContext } from './context'

const App = () => {
  const [isAuth, setAuth] = useState(false);
  // const [isLoading, setLoading] = useState(true);
  // Left for fetching data from server

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true);
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setAuth,
      // isLoading
      }}>

      <BrowserRouter>
        <div id='wrapper'>
          <Navibar />
          <div className="App">
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<MainPage />} />
              <Route path='/users' element={<Users />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </AuthContext.Provider>
  );
}

export default App;
