import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';


function App() {
  
  return (
    <div className="App"> 
      <Router> 
          <NavBar />
          <Routes> 
            <Route path="/" element={<HomePage/>} />
            <Route path="/services" element={<Services/>} /> 
          </Routes>
      </Router>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
