import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
// Components
import { Navibar } from './components/Navibar';
import Router from './components/Router';
import Footer from './components/Footer'


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
        <div className='AppWrapper'>
          <Navibar />
          <Router/>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
