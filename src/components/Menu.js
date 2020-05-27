import React,{ useEffect } from 'react'  
import { connect } from "react-redux";
import { increment, decrement } from '../redux/actions'
 import { Link } from "react-router-dom";
import {Animated} from "react-animated-css"; 
 
function Menu(props) {   
    useEffect(() => {
        if(props.counter.c17) {
            let bonus=document.getElementById("bonus")
            let bonus2=document.getElementById("bonus2")
            let bonus3=document.getElementById("bonus3")
            let bonus4=document.getElementById("bonus4")
            bonus.style.display="block"
            bonus2.style.display="block"
            bonus3.style.display="block"
            bonus4.style.display="block"
        }
        let modal=document.getElementById("myModal")
        if(props.counter.c17 || props.counter.c22) {
            modal.style.display = "none"
        } 
        else if(props.counter.c17===0 && props.counter.c22===0){
            modal.style.display = "block"
        }
    },[])
 

    return (
        <div className="bg-white"> 
        <div id="myModal" className="modal hidden fixed z-10 pt-10 left-0 top-0 h-screen px-5 sm:w-full"> 
                    <div className="modalAnimate relative bg-white m-auto pb-2 pr-10 pl-10 pt-10 shadow-lg w-full rounded sm:w-full md:w-1/2"> 
                        <div className="p-2">
                            <p className="text-gray-900 mt-10 mb-10 text-center">Please sign in before ordering!</p>
                        </div>
                        <div className="modal-footer">
                             <div className="buttons flex justify-center items-center mt-6"  >
                                <Link to="/login" className="btn2 btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                    Click here
                                </Link> 
                            </div> 
                        </div>
                    </div>
                </div>
             {/* Pasta */}
        <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <div  className="flex items-center mt-4 px-4 sm:mx-4 md:mx-0 lg:mx-2">
                <h1 className="mb-8 text-2xl text-blue-500 border-b border-blue-500">PASTA</h1>
            </div>

    
        <div className="flex flex-wrap">
            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6 md:w-1/2 md:px-0 lg:w-1/4 lg:px-4 translate translate-x-6 ">
                <div className="px-2 w-full" > 
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/pesto.jpg")} alt="Pesto pasta" /> 
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-2">
                            <span className="text-xs bg-blue-500 px-2 rounded-sm ml-2 tracking-wider sm:mx-4">BESTSELLER</span>
                        </div>
                        <div>
                            <h1  className="dish1 text-sm px-2 my-1 sm:mx-4 md:mx-2">Pesto pasta</h1> 
                            <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                <div className="flex sm:mx-4 md:mx-4 md:mt-1 lg:mx-2">
                                    <button type="button" className="bg-blue-500 px-2 mx-2 rounded" onClick={() => props.decrement("c1")}>-</button>
                                    <div  className="mr-2 text-sm" >{props.counter.c1}</div>            
                                    <button type="button" className="bg-blue-500 px-1 mr-2 rounded" onClick={() => props.increment("c1")}>+</button>
                                </div>
                                <div>
                                    <h1 className="px-2 mr-2 text-sm sm:mx-4 md:mx-4 md:mt-1" >₹300</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6 md:w-1/2 md:px-0  lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/pasta.jpg")} alt="Seafood pasta" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                            <h1  className="text-sm px-2 mt-3 sm:mx-4 md:mx-2">Seafood pasta</h1>
                            <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                <div className="flex  sm:mx-4 md:mx-4 lg:mx-2">
                                    <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c2")}>-</button>
                                    <div className="mr-2 mt-2 text-sm">{props.counter.c2}</div>
                                    <button type="button"  className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c2")}>+</button>
                                </div>
                                <div>
                                    <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4"  >₹400</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0  lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/carbonara.jpg")} alt="Carbonara Pasta" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                            <h1   className="text-sm px-2 mt-3 sm:mx-4 md:mx-2">Carbonara Pasta</h1>
                            <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                <div className="flex sm:mx-4 md:mx-4 lg:mx-2">
                                    <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c3")}>-</button>
                                    <div className="mr-2 mt-2 text-sm">{props.counter.c3}</div>
                                    <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c3")}>+</button>
                                </div>
                                <div>
                                    <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4"  >₹310</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0  lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/tagliatelle.jpg")} alt="Tagliatelle pasta" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                            <h1  className="text-sm px-2 mt-3 sm:mx-4 md:mx-2">Tagliatelle pasta</h1>
                            <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                <div className="flex sm:mx-4 md:mx-4 lg:mx-2">
                                <button type="button"  className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c4")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c4}</div>
                                <button type="button"  className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c4")}>+</button>
                                </div>
                                <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4" >₹350</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Animated>
 
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
  
            <div className="flex flex-wrap border-b-2">
            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/ravioli.jpg")} alt="Ravioli with burnt butter sauce" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1  className="text-sm px-2 mt-3 sm:mx-4 md:mx-2">Ravioli with burnt butter sauce</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button"   className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c5")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c5}</div>
                                <button type="button"  className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c5")}>+</button>
                            </div>
                            <div>
                                 <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4" >₹500</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/lasagna.jpg")} alt="Lasagna" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1   className="text-sm px-2 mt-3 sm:mb-5 md:mb-0 lg:mb-5 xl:mb-0 sm:mx-4 md:mx-2">Lasagna</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c6")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c6}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c6")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4"  >₹550</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/veg-ravioli.jpg")} alt="Veg Ravioli" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1  className="text-sm px-2 mt-3 lg:mb-5 xl:mb-0 sm:mx-4 md:mx-2">Veg Ravioli</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c7")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c7}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c7")}>+</button>  
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4" >₹500</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/pizza-pasta.jpg")} alt="Pizza pasta" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1  className="text-sm px-2 mt-3  sm:mx-4 md:mx-2 lg:pb-5 xl:pb-0">Pizza pasta</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button"  className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c8")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c8}</div>
                                <button type="button"  className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c8")}>+</button> 
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4"  >₹600</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>   
            </div>
            </Animated>

            {/* Pizza */}
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <div className="flex items-center mt-4 px-4 sm:mx-4 md:mx-0 lg:mx-2">
                <h1 className="mb-8 text-2xl text-blue-500 border-b border-blue-500">PIZZA</h1>
            </div>
            
            
            <div className="flex flex-wrap border-b-2">
            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/pepperono.jpg")} alt="Pepperoni pizza" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2  ">Pepperoni pizza</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c9")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c9}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c9")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹440</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
 
            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/tomato-pizza.jpg")} alt="Vegetarian Pizza" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2 ">Vegetarian Pizza</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                 <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c10")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c10}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c10")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹490</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/olive.jpg")} alt="Pepperoni and Olive Pizza" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2">Pepperoni and Olive</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c11")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c11}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c11")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹550</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>    

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/margherita.jpg")} alt="Margherita" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3  sm:mx-4 md:mx-2 ">Margherita</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c12")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c12}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c12")}>+</button> 
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹300</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
            </div>
            </Animated>

            {/* Dessert */} 
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <div className="flex items-center mt-4 px-4 sm:mx-4 md:mx-0 lg:mx-2">
                <h1 className="mb-8 text-2xl text-blue-500 border-b border-blue-500">DESSERT</h1>
            </div>
           
        
            <div className="flex flex-wrap">
            <div className="px-2 mb-6 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/tiramasu.jpg")} alt="tiramasu" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                    <div className="pt-2">
                            <span className="text-xs bg-blue-500 px-2 rounded-sm ml-2 tracking-wider sm:mx-4">BESTSELLER</span>
                        </div>
                        <div className="">
                        
                        <h1 className="dish1 text-sm px-2 sm:mx-4 md:mx-2">Tiramasu</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c13")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c13}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c13")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹250</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
                
            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/bundt-cake.jpg")} alt="Chocolate bundt cake" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2">Chocolate bundt cake</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c14")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c14}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c14")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹200</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  

            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/brownie.jpg")} alt="Brownie with ice cream" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2">Brownie with ice cream</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c15")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c15}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c15")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹270</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
                 
            <div className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/papaya-cake.jpg")} alt="Coconut and Papaya cake" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2 md:pb-0">Coconut Papaya cake</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c16")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c16}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c16")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹290</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 

            <div id="bonus" className="hidden px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/cheesecake.jpg")} alt="Chocolate Cheesecake" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2 md:pb-0">Chocolate Cheesecake</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c18")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c18}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c18")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹290</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 

            <div id="bonus2" className="hidden px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/tart.jpg")} alt="Lemon tart" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2 md:pb-0">Lemon curd tart</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c19")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c19}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c19")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹290</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 

            <div id="bonus3" className="hidden px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/pudding.jpg")} alt="Chocolate pudding" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2 md:pb-0">Chocolate Pudding</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c20")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c20}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c20")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹290</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 

            <div id="bonus4" className="hidden px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6  md:w-1/2 md:px-0 lg:w-1/4 lg:px-4">
                <div className="px-2 w-full">
                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={require("../images/spinach-cake.jpg")} alt="spinach-cake" />
                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                        <div className="pt-4">
                        <h1 className="text-sm px-2 mt-3 sm:mx-4 md:mx-2 md:pb-0">Spinach cake</h1>

                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                            <div className="flex sm:mx-4 lg:mx-2">
                                <button type="button" className="bg-blue-500 px-2 mx-2 mt-2 rounded" onClick={() => props.decrement("c21")} >-</button>
                                <div className="mr-2 mt-2 text-sm">{props.counter.c21}</div>
                                <button type="button" className="bg-blue-500 px-1 mr-2 mt-2 rounded" onClick={() => props.increment("c21")}>+</button>
                            </div>
                            <div>
                                <h1 className="px-2 mr-2 mt-2 text-sm sm:mx-4">₹290</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>   
        </div> 
        </Animated>

             <div className="buttons flex justify-center items-center mt-6">
                <Link to="/checkout" className="btn2 btn-1" >
                 <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                GO TO CART
                 </Link> 
             </div> 
        </div> 
    )
} 

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        details: state.details,
        loyalty: state.loyalty,
     }
}

const mapDispatchToProps = () => {
    return {
        increment,
        decrement,
     }
}

export default connect(mapStateToProps,mapDispatchToProps())(Menu)

 