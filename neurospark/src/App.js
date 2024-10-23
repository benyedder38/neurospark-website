import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Signup from './pages/Signup'

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
