import HomePage from './pages/HomePage';
import Preloader from './components/Preloader'
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [isLoading,setIsLoading]  = useState(true);


  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
     <div>
       {isLoading ? (
         <Preloader />
       ) : (
         // Your main content goes here
         <HomePage />
       )}
     </div>
   );
}

export default App
