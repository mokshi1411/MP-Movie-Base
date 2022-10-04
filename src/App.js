import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    </div>
    </Router>
  );
}

export default App;
