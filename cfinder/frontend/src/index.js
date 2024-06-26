import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Coaches from './components/Coaches';
import Profile from './components/Profile';
import Bookings from './components/Bookings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/bookings" component={Bookings} />
      </Switch>
    </Router>
  );
}

export default App;
