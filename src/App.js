import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './landingPage';
import MoviePage from './moviePage';
import Bookmarks from './bookmarks';
import './App.css'

function App() {
  return (
    <HashRouter >
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        {/* <Route exact path="/browse" component={LandingPage}></Route> */}
        <Route exact path="/bookmarks" component={Bookmarks}></Route>
        <Route exact path="/:slugPath/" component={MoviePage}></Route>
      </Switch>
    </HashRouter>
  )
}

export default App
