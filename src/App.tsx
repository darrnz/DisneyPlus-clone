import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home/Home'
import Detail from './components/Detail/Details'
import Login from './components/Login/Login'
import style from 'styled-components'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch >
        <Route exact path='/' component={ Home } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/detail' component={ Detail } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
