import React from 'react'
import { connect } from "react-redux";
import { useState } from "react";
import { Animated } from "react-animated-css";

function Checkout(props) {
     const [menu,setMenu] = useState([])  
 
    function getTotal() { 
        let eateries = {}
         for (var key in props.counter) { 
            if (props.counter[key] > 0) {  
                for (var item in props.details) { 
                    if (key === item) {
                        props.details[item].rate *= props.counter[key]  
                        eateries[props.details[item].dish] = props.details[item].rate
                         setMenu(() => {
                            menu.push(eateries)
                        }) 
                                  const ul = document.querySelector('ul')
                                let btn = document.getElementById("btn")
                                btn.style.display="none" 
                                const li = document.createElement('li')
                                li.style.cssText = "margin-top:10px;font-size:1.25rem"
                                if(Object.entries(menu[0]).length === 0) {
                                    li.innerHTML = "You haven't ordered anything. Head back to the menu and place your order!"
                                }
                                else {
                                    li.textContent = Object.entries(menu[0])[Object.entries(menu[0]).length - 1].join(" - ")
                                    console.log(Object.entries(menu[0]).length - 1)
                                } 
                                ul.appendChild(li) 
                             
                        }
                    }
                }
            }
}
 
    return(
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl mt-8 text-blue-500"><b>Order Summary</b></h1>
            <div className="p-4 mx-4 mt-8 text-white  flex-col" >   
                <button id="btn" onClick={getTotal} className="text-blue-500 text-xl">Click to see your order</button>
                <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>
                    <ul className="mt-4 text-blue-500 "> 
                    </ul>
                </Animated>
            </div>
         </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        details: state.details,
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Checkout)
 
