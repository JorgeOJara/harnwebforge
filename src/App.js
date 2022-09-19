import './css/App.css';
import './css/all.min.css';
import './css/bootstrap.css';
import './css/css2.css';
import './css/svg-with-js.min.css';

import React, {setState ,useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Main } from './comp/mains';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<a href="https://discord.com/api/oauth2/authorize?client_id=1006779722988011592&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify%20email"><h1>login</h1></a>}/>
        <Route path="*" element={<h1>not found</h1>}/>
      </Routes>
  </Router>
  );
}

export default App;
