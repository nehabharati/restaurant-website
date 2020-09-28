import React, { useState } from 'react'
import { connect } from "react-redux";
import { increment, decrement } from '../redux/actions'
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { menu } from "../menu"

function Menu(props) {
    const [pasta] = useState(menu.slice(0, 8))
    const [pizza] = useState(menu.slice(8, 12))
    const [dessert] = useState(menu.slice(12, 16))
    const [bonus] = useState(menu.slice(16, 21))

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
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>
                                    Click here
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pasta */}
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                <div className="flex items-center mt-4 px-4 sm:mx-4 md:mx-0 lg:mx-2">
                    <h1 className="mb-8 text-2xl text-blue-500 border-b border-blue-500">PASTA</h1>
                </div>


                <div className="flex flex-wrap">
                    {pasta.map((dish, i) => (
                        <div key={i} className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6 md:w-1/2 md:px-0 lg:w-1/4 lg:px-4 translate translate-x-6 ">
                            <div className="px-2 w-full" >
                                <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={dish.img} alt={dish.name} />
                                <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                                    <div className="pt-2">
                                        {dish.bestseller ? (
                                            <span className="text-xs bg-blue-500 px-2 rounded-sm ml-2 tracking-wider sm:mx-4">BESTSELLER</span>
                                        ) : null}
                                    </div>
                                    <div>
                                        <h1 className="dish1 text-sm px-2 my-1 sm:mx-4 md:mx-2">{dish.name}</h1>
                                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                            <div className="flex sm:mx-4 md:mx-4 md:mt-1 lg:mx-2">
                                                <button type="button" className="bg-blue-500 px-2 mx-2 rounded" onClick={() => props.decrement(dish.count)}>-</button>
                                                <div className="mr-2 text-sm" >{props.counter[dish.count]}</div>
                                                <button type="button" className="bg-blue-500 px-1 mr-2 rounded" onClick={() => props.increment(dish.count)}>+</button>
                                            </div>
                                            <div>
                                                <h1 className="px-2 mr-2 text-sm sm:mx-4 md:mx-4 md:mt-1" >₹{dish.price}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Animated>

            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>

                <div className="flex flex-wrap border-b-2">

                </div>
            </Animated>

            {/* Pizza */}
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                <div className="flex items-center mt-4 px-4 sm:mx-4 md:mx-0 lg:mx-2">
                    <h1 className="mb-8 text-2xl text-blue-500 border-b border-blue-500">PIZZA</h1>
                </div>


                <div className="flex flex-wrap border-b-2">
                    {pizza.map((dish, i) => (
                        <div key={i} className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6 md:w-1/2 md:px-0 lg:w-1/4 lg:px-4 translate translate-x-6 ">
                            <div className="px-2 w-full" >
                                <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={dish.img} alt={dish.name} />
                                <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                                    <div className="pt-2">
                                        {dish.bestseller ? (
                                            <span className="text-xs bg-blue-500 px-2 rounded-sm ml-2 tracking-wider sm:mx-4">BESTSELLER</span>
                                        ) : null}
                                    </div>
                                    <div>
                                        <h1 className="dish1 text-sm px-2 my-1 sm:mx-4 md:mx-2">{dish.name}</h1>
                                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                            <div className="flex sm:mx-4 md:mx-4 md:mt-1 lg:mx-2">
                                                <button type="button" className="bg-blue-500 px-2 mx-2 rounded" onClick={() => props.decrement(dish.count)}>-</button>
                                                <div className="mr-2 text-sm" >{props.counter[dish.count]}</div>
                                                <button type="button" className="bg-blue-500 px-1 mr-2 rounded" onClick={() => props.increment(dish.count)}>+</button>
                                            </div>
                                            <div>
                                                <h1 className="px-2 mr-2 text-sm sm:mx-4 md:mx-4 md:mt-1" >₹{dish.price}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </Animated>

            {/* Dessert */}
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                <div className="flex items-center mt-4 px-4 sm:mx-4 md:mx-0 lg:mx-2">
                    <h1 className="mb-8 text-2xl text-blue-500 border-b border-blue-500">DESSERT</h1>
                </div>


                <div className="flex flex-wrap">
                    {dessert.map((dish, i) => (
                        <div key={i} className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6 md:w-1/2 md:px-0 lg:w-1/4 lg:px-4 translate translate-x-6 ">
                            <div className="px-2 w-full" >
                                <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={dish.img} alt={dish.name} />
                                <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                                    <div className="pt-2">
                                        {dish.bestseller ? (
                                            <span className="text-xs bg-blue-500 px-2 rounded-sm ml-2 tracking-wider sm:mx-4">BESTSELLER</span>
                                        ) : null}
                                    </div>
                                    <div>
                                        <h1 className="dish1 text-sm px-2 my-1 sm:mx-4 md:mx-2">{dish.name}</h1>
                                        <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                            <div className="flex sm:mx-4 md:mx-4 md:mt-1 lg:mx-2">
                                                <button type="button" className="bg-blue-500 px-2 mx-2 rounded" onClick={() => props.decrement(dish.count)}>-</button>
                                                <div className="mr-2 text-sm" >{props.counter[dish.count]}</div>
                                                <button type="button" className="bg-blue-500 px-1 mr-2 rounded" onClick={() => props.increment(dish.count)}>+</button>
                                            </div>
                                            <div>
                                                <h1 className="px-2 mr-2 text-sm sm:mx-4 md:mx-4 md:mt-1" >₹{dish.price}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                    {props.counter.c17 ? (
                        bonus.map((dish, i) => (
                            <div key={i} className="px-2 mb-4 w-full mb-8 px-4 md:px-4 md:mb-8 sm:w-1/2 sm:px-6 md:w-1/2 md:px-0 lg:w-1/4 lg:px-4 translate translate-x-6 ">
                                <div className="px-2 w-full" >
                                    <img className="block h-auto w-full rounded-t-md shadow-2xl cursor-pointer" src={dish.img} alt={dish.name} />
                                    <div className="bg-gray-900 text-white rounded-b-md shadow-2xl cursor-pointer">
                                        <div className="pt-2">
                                            {dish.bestseller ? (
                                                <span className="text-xs bg-blue-500 px-2 rounded-sm ml-2 tracking-wider sm:mx-4">BESTSELLER</span>
                                            ) : null}
                                        </div>
                                        <div>
                                            <h1 className="dish1 text-sm px-2 my-1 sm:mx-4 md:mx-2">{dish.name}</h1>
                                            <div className="flex justify-between sm:justify-between md:justify-between lg:justify-between py-4">
                                                <div className="flex sm:mx-4 md:mx-4 md:mt-1 lg:mx-2">
                                                    <button type="button" className="bg-blue-500 px-2 mx-2 rounded" onClick={() => props.decrement(dish.count)}>-</button>
                                                    <div className="mr-2 text-sm" >{props.counter[dish.count]}</div>
                                                    <button type="button" className="bg-blue-500 px-1 mr-2 rounded" onClick={() => props.increment(dish.count)}>+</button>
                                                </div>
                                                <div>
                                                    <h1 className="px-2 mr-2 text-sm sm:mx-4 md:mx-4 md:mt-1" >₹{dish.price}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null}
                </div>
            </Animated>

            <div className="buttons flex justify-center items-center mt-6">
                <Link to="/checkout" className="btn2 btn-1" >
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
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

export default connect(mapStateToProps, mapDispatchToProps())(Menu)

