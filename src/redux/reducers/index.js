import  {combineReducers}  from 'redux'
import countReducer from './count' 
import detailsReducer from './details'
import loyaltyReducer from './loyal'
// import statusReducer from './loyal'

export default combineReducers({
    counter: countReducer,
    details: detailsReducer,
    loyalty: loyaltyReducer,
    // status: statusReducer
})