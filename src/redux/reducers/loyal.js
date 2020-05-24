import { LOYAL } from '../actions' 

let initialState = {
    login:false
}
// console.log(!initialState.login )
export default function loyalReducer(state = initialState , action) {
    switch (action.type) {
        case LOYAL: 
            console.log(!state.login ) 
            return  !state.login
        default:
            return state
    }
} 