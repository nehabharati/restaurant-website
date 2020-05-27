import React,{ useState } from 'react';
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
  const [show,setShow] = useState(false)

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
      <div className="text-2xl absolute mt-64 ml-20">
         <Link to="/register">
            <button className="text-gray-900 text-xl bg-white px-4 py-2 mb-2">SIGN UP</button>
         </Link> 
         <button className="text-gray-900 text-xl bg-white px-4 py-2 mb-2 mx-16" onClick={handleClick}>OFFER</button> 
      </div>
      </div>
      <div id="myModal" className="modal hidden fixed z-50 pt-10 left-0 top-0 h-screen opacity-100"> 
        <div className="modalAnimate relative bg-white m-auto pb-2 pr-10 pl-10 pt-10 shadow-lg w-1/2 rounded">
          <div className="p-2 bg-blue-500 text-white">
              <span id="close" className="close text-white float-right text-lg font-bold hover:text-gray-800 cursor-pointer" onClick={handleShow}>&times;</span>
              <h2>Restaurant Loyalty Program</h2>
          </div>
          <div className="p-2">
            <p className="text-gray-900 mt-4 mb-10 text-center">Sign in the second time and avail a special offer</p>
          </div> 
        </div>
      </div>
    </div>
  )
}