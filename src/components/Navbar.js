import React, { useState } from 'react'

function Navbar() {
    const [open,setOpen] = useState(false)
    return (
        <div>
            <header className="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    <div>
                        <img id="logo" className="text-sm" src={require("../images/indulge.png")} alt="Indulge logo" className="z-10"/>
                    </div>
                    <div className="sm:hidden">
                        <button type="button" className="text-gray-500  hover:text-white" onClick={() => setOpen(!open)}>
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {open && <path v-if="isOpen" fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>}
                                {!open && <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
                            </svg>
                        </button>
                    </div>
                </div>
                 
                <div className={`${open ? `block` : `hidden`} px-2 pt-2 pb-5 sm:flex`} >
                    <a href="/" className="block text-white uppercase hover:bg-gray-800 bg-blue-3 px-2 py-1 rounded sm:hover:border-b-2 sm:hover:border-white">Home</a>
                    <a href="/menu" className="block text-white uppercase hover:bg-gray-800 px-2 py-1 mt-1 rounded sm:mt-0 sm:ml-2">Menu</a>
                    <a href="/login" className="block text-white uppercase hover:bg-gray-800 px-2 py-1 mt-1 rounded sm:mt-0 sm:ml-2">Sign In</a>
                    <a href="/register" className="block text-white uppercase hover:bg-gray-800 px-2 py-1 mt-1 rounded sm:mt-0 sm:ml-2">Register</a>     
                </div> 
            </header> 
        </div>
    )
}

export default Navbar