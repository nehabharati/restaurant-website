import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { useState } from "react";
import { Animated } from "react-animated-css";

function Checkout(props) {
    const [menu, setMenu] = useState([])
    const [eateries, setEateries] = useState({})

    useEffect(() => {
        for (var key in props.counter) {
            if (props.counter[key] > 0) {
                for (var item in props.details) {
                    if (key === item) {
                        props.details[item].rate *= props.counter[key]
                        eateries[props.details[item].dish] = props.details[item].rate
                        setMenu(() => {
                            menu.push(eateries)
                        })
                        setEateries(Object.entries(menu[0]))
                    }
                }
            }
        }
    }, [props.counter])

    const list = Object.entries(eateries).map(([key, value]) => { return <li key={key}>{value[0]} - {value[1]}</li> })
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl mt-8 text-blue-500"><b>Order Summary</b></h1>
            <div className="p-4 mx-4 mt-8 text-white  flex-col" >
                <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={3000} animationOutDuration={3000} isVisible={true}>
                    <ul className="text-blue-500">{list}</ul>
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

