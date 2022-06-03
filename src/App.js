import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Faq from './Components/Faq';
import Login from './Components/Login';
import Account from './Components/Account';
import Road from './Components/Road';
import Token from './Components/Token';
import Rewards from './Components/Rewards';

import { useEffect } from 'react';
function App() {
 
  return (
    <>
      <Router>
        <Routes>


          <Route exact path='/' element={<Home />} />
       
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/road" element={<Road/>} />
          <Route exact path="/token" element={<Token/>} />
          <Route exact path="/rewards" element={<Rewards/>} />
        
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
