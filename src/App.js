import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import MoviePage from './moviePage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/:id/:slugPath/" component={MoviePage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
