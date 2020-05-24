import React, { useState, useEffect } from 'react'
// import GoogleLogin from 'react-google-login';

function Register() { 

    function handleSubmit(e){
        e.preventDefault()
        document.getElementById("form").reset()
        window.location = "/login"
    }
    return(
        <div className="h-screen bg-blue-200">
            <div className="flex justify-center font-Nunito"> 
                <form id="form" className="bg-white mt-32 ml-10 mr-10 rounded shadow-xl relative sm:w-1/2 md:w-1/2 lg:w-1/4" noValidate onSubmit={handleSubmit}>
                    <div className="pl-8 pr-8 pt-8"> 
                        <label className="" id = 'email'>Email</label>
                        <input type = 'email' placeholder = 'Email' id = 'email' className=" my-2 border border-blue-700 w-full rounded p-1"/>
                        <label className="mb-1">Password</label>
                        <input type = 'password' placeholder='Password' id = 'password' className="my-2 border border-blue-700 w-full rounded p-1"/>
                        <div id="legend" className="z-10 w-full">
                            <button id="reg" className="btn border-0 pt-2 pb-6 m-auto w-full text-white bg-transparent mt-16 focus:outline-none" type='submit'><span>REGISTER</span></button>
                        </div>
                    </div>
                    <small className="hidden">Error message</small>
                </form>
            </div>
        </div>
    )
}

export default Register