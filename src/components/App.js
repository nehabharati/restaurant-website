import React from 'react';
 import '../css/index.css'
import Login from './Login' 
import Menu from './Menu'
import Register from './Register'
import Navbar from './Navbar'
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'

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
  function handleClick() {
    let modal = document.getElementById("myModal")
    modal.style.display="block"
  }

  function handleShow() {
    let modal = document.getElementById("myModal")
    modal.style.display="none"
  }

  return (
    <div className="back"> 
      <div className="redo">
      <div className="text-2xl absolute mt-64 ml-32  md:flex "> 
        <a href="/register" className="horizontal md:mx-10">
          <span className="text tracking-wider font-semibold">SIGN UP</span>
        </a>  
        <a href="#" className="horizontal mt-5 md:mt-0 md:mx-10" onClick={handleClick}>
          <span className="text tracking-wider font-semibold">OFFER</span>
        </a> 
      </div>
      </div>
      <div id="myModal" className="modal hidden fixed z-50 pt-10 left-0 top-0 h-screen opacity-100 px-5"> 
        <div className="modalAnimate relative bg-white m-auto pb-2 pr-10 pl-10 pt-10 shadow-lg w-full sm:w-1/2 rounded">
             <span id="close" className="close float-right text-lg font-bold hover:text-gray-800 cursor-pointer" onClick={handleShow}>&times;</span>
           <div className="p-2">
          <p className="text-gray-900 mt-4 mb-10 text-center">Sign in the second time and avail a special offer</p>
          </div> 
        </div>
      </div>
    </div>
  )
}