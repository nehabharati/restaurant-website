import React, { useState } from 'react'

function Register() {
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')

    const handleEmail = (e) => setEmail(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (reg.test(email) === false) {
            setEmailMessage("Please enter valid email")
        }
        else {
            setEmailMessage("Email is correct")
            window.location = "/login"
        }
    }
    return (
        <div className="h-screen bg-blue-200">
            <div className="flex justify-center font-Nunito">
                <form id="form" className="bg-white mt-32 ml-10 mr-10 rounded shadow-xl relative sm:w-1/2 md:w-1/2 lg:w-1/4" noValidate onSubmit={handleSubmit}>
                    <div className="pl-8 pr-8 pt-8">
                        <label>Email</label>
                        <input type='email' placeholder='Email' onChange={handleEmail} className=" my-2 border border-blue-700 w-full rounded p-1" />
                        {emailMessage ? (<small className="hidden -mt-2 text-red-700">{emailMessage}</small>) : null}
                        <label className="mb-1">Password</label>
                        <input type='password' placeholder='Password' id='password' className="my-2 border border-blue-700 w-full rounded p-1" />
                        <div id="legend" className="z-10 w-full">
                            <button id="reg" className="btn pt-2 pb-6 m-auto w-full text-white bg-transparent mt-16 focus:outline-none" type='submit'><span>REGISTER</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register