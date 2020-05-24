import React from 'react';
// import '../sass/index.scss'
import '../css/index.css'
import Login from './Login' 
import Menu from './Menu'
import Register from './Register'
import Navbar from './Navbar'
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path = '/' exact component={Home} />
          <Route path = '/register' component={Register} />
          <Route path = '/login' component={Login} />
          <Route path = '/menu' component={Menu} /> 
          <Route path = '/checkout' component={Checkout} />
      </Switch>
    </Router>
  );
} 
export default App;


const Home = () => {
  return (
    <div className="back"> 
      <div className="redo">
      <div className="animated-title mx-10">
        <div className="text-top">
          <div className="z-10">
            <span>Food</span>
            <span>done</span>
          </div>
        </div>
        <div className="text-bottom z-10">
          <div>right!</div>
        </div>
      </div>
      </div>
    </div>
  )
}