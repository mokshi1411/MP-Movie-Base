import React from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}>

        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
