import { INCREMENT, DECREMENT } from "../actions"

let initialState = {
  c1 : 0,
  c2 : 0,
  c3 : 0,
  c4 : 0,
  c5 : 0,
  c6 : 0,
  c7 : 0,
  c8 : 0,
  c9 : 0,
  c10 : 0,
  c11 : 0,
  c12 : 0,
  c12 : 0,
  c13 : 0,
  c14 : 0,
  c15 : 0,
  c16 : 0,
  c17: 0
}

export default function countReducer(state = initialState , action) {
    switch (action.type) {
      case INCREMENT: 
        return {
          ...state,
          [action.payload.name]  : state[action.payload.name] + 1 
      }
      case DECREMENT: 
        if(state[action.payload.name] > 0) {
          return {
            ...state,
            [action.payload.name]  : state[action.payload.name] - 1 
          }
        }
        default:
            return state
    }
} 