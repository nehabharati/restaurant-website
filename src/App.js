import React from 'react';
import './css/index.css'
import Login from './components/Login'
import Menu from './components/Menu'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/menu' component={Menu} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
    </Router>
  );
}
export default App;

