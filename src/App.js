import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import MoviePage from './moviePage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movinfo/" component={LandingPage}></Route>
        {/* <Route exact path="/browse" component={LandingPage}></Route> */}
        <Route exact path="/movinfo/:id/:slugPath/" component={MoviePage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
