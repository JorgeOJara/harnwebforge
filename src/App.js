import './css/App.css';
import './css/all.min.css';
import './css/bootstrap.css';
import './css/css2.css';
import './css/svg-with-js.min.css';

import React, { setState ,useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Main } from './comp/mains';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route exact path="/login" element={<h1>login</h1>}/>
        <Route path="*" element={<h1>not found</h1>}/>
      </Routes>
  </Router>
  );
}

export default App;
