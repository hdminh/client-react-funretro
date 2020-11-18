import React from 'react';
import TopBar from './components/TopBar';
import { Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  return (
    <Router>
      <div>
      <TopBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </div>
    </Router>
  );
}
