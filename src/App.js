import React from 'react';

import './App.css';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import NavBar from './Nav';
import TestComponent from './TestComponent';

import { BrowserRouter, Router, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <NavBar />

        <Route exact path="/">
          <VendingMachine />
        </Route>

        <Route exact path="/chips">
          <Snack item='chips' />
        </Route>

        <Route exact path="/candy">
          <Snack item='candy' />
        </Route>

        <Route exact path="/soda">
          <Snack item='soda' />
        </Route>
        
      </BrowserRouter>


    </div>
  );
}

export default App;
