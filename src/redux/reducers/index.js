import  {combineReducers}  from 'redux'
import countReducer from './count' 
import detailsReducer from './details'
  
export default combineReducers({
    counter: countReducer,
    details: detailsReducer,
  })