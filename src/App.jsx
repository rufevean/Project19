
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Preloader from './components/Preloader';
import './App.css';
import { useState, useEffect } from 'react';
import Qa from './pages/Qa.jsx'
import Qb from './pages/Qb.jsx'
import Qc from './pages/Qc.jsx'
import Qd from './pages/Qd.jsx'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router> 
            <Routes>
              <Route path='/' element = {<HomePage />}/>
              <Route path='/qa' element = {<Qa />}/>
              <Route path='/qb' element = {<Qb />}/>              
              <Route path='/qc' element = {<Qc />}/>
              <Route path='/qd' element = {<Qd />}/>
            </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

