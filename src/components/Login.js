import React, { useState } from 'react'
import { connect } from "react-redux";
import { increment } from '../redux/actions'
import { Link } from "react-router-dom";
import axios from 'axios'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const form = document.getElementById('form');
        const mail = document.getElementById('email');
        const small = form.querySelector('small');
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (reg.test(mail.value) === false) {
            small.innerText = "Please enter valid email"
            small.style.display = "block"
        }
        else {
            small.innerText = "Email is correct"
            small.style.display = "none"
        }

        const loginInfo = {
            email,
            password
        }
        axios.post("http://localhost:5000/dishes/add", loginInfo)
            .then(res => console.log(res.data));


        axios.get("http://localhost:5000/dishes/")
            .then(res => res.data.map(mail => {
                if (email === mail.email && small.innerText === "Email is correct") {
                    let modal = document.getElementById("myModal")
                    var span = document.getElementsByClassName("close")[0]
                    modal.style.display = "block"

                    span.onclick = function () {
                        modal.style.display = "none";
                        console.log(props.counter.c22)
                    }

                    window.onclick = function (event) {
                        if (event.target === modal) {
                            modal.style.display = "none"
                        }
                    }
                }
            }

            )
            )
    }

    return (
        <div className="h-screen bg-blue-200 ">
            {/* Modal */}
            <div id="myModal" className="modal hidden fixed z-10 pt-10 left-0 top-0 h-screen px-5">
                <div className="modalAnimate relative bg-white m-auto pb-2 pr-10 pl-10 pt-10  shadow-lg lg:w-1/2 rounded w-full">
                    <div className="p-2 bg-blue-500 text-white">
                        <span id="close" className="close text-white float-right text-lg font-bold hover:text-gray-800 cursor-pointer">&times;</span>
                        <h2>Restaurant Loyalty Program</h2>
                    </div>
                    <div className="p-2">
                        <p className="text-gray-900 mt-10 mb-10">This is your second visit. You get to choose from our extended menu featuring 4 new desserts. Start ordering!</p>
                    </div>
                    <div className="modal-footer">
                        <div className="buttons flex justify-center items-center mt-6" onClick={() => props.increment("c17")}>
                            <Link to="/menu" className="btn2 btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>
                                    Click here
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="flex justify-center">
                <form id="form" className="bg-white mt-32 ml-10 mr-10 rounded shadow-xl relative sm:w-1/2 md:w-1/2 lg:w-1/4" noValidate onSubmit={handleSubmit}>
                    <div className="pl-8 pr-8 pt-8">
                        <label className="mb-1">Email</label>
                        <input type='email' id="email" placeholder='Email' className="mt-2 mb-6 border border-blue-700 w-full rounded p-1" value={email} onChange={handleEmail} />
                        <small className="hidden -mt-4 text-red-700">Error message</small>

                        <label className="mb-1">Password</label>
                        <input type='password' id="password" placeholder='Password' className="my-2 border border-blue-700 w-full rounded p-1" value={password} onChange={handlePassword} />

                        <div className="mb-10 flex justify-between">
                            <div className="flex mt-2">
                                <input type='checkbox' className="mr-2" />
                                <label className="mb-1">
                                    <p className="text-xs">Remember me</p>
                                </label>
                            </div>
                        </div>
                        <div id="legend1" className="z-10 w-full">
                            <button id="reg1" className="btn1 md:flex md:items-start md:justify-start pb-6 m-auto w-full text-white bg-transparent mt-8 focus:outline-none" type='submit'><span>SIGN IN</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = () => {
    return {
        increment
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Login)
