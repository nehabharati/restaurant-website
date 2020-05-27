import { DISH } from "../actions"

let initialState = {
  c1 : { 
      id: 1,
      dish: "Pesto Pasta", 
      rate: 300 
    },
  c2 : { 
    id: 2,
    dish: "Seafood pasta", 
    rate: 400 
  },
  c3 : { 
    id: 3,
    dish: "Carbonara Pasta", 
    rate: 310 
  },
  c4 : { 
    id: 4,
    dish: "Tagliatelle pasta", 
    rate: 350 
  },
  c5 : { 
    id: 5,
    dish: "Ravioli with burnt butter sauce", 
    rate: 500 
  },
  c6 : { 
    id: 6,
    dish: "Lasagna", 
    rate: 550
  },
  c7 : { 
    id: 7,
    dish: "Veg Ravioli", 
    rate: 500 
  },
  c8 : { 
    id: 8,
    dish: "Pizza pasta", 
    rate: 600 
  },
  c9 : { 
    id: 9,
    dish: "Pepperoni pizza", 
    rate: 440 
  },
  c10 : { 
    id: 10,
    dish: "Vegetarian Pizza", 
    rate: 490 
  },
  c11 : { 
    id: 11,
    dish: "Pepperoni and Olive Pizza", 
    rate: 550 
  },
  c12 : { 
    id: 12,
    dish: "Margherita", 
    rate: 300 
  }, 
  c13 : { 
    id: 13,
    dish: "Tiramasu", 
    rate: 250 
  },
  c14 : { 
    id: 14,
    dish: "Chocolate bundt cake", 
    rate: 200 
  },
  c15 : { 
    id: 15,
    dish: "Brownie with ice cream", 
    rate: 270 
  },
  c16 : { 
    id: 16,
    dish: "Coconut and Papaya cake", 
    rate: 290 
  },
  c18 : { 
    id: 18,
    dish: "Chocolate Cheesecake", 
    rate: 240 
  },
  c19 : { 
    id: 19,
    dish: "Lemon curd tart", 
    rate: 180 
  },
  c20 : { 
    id: 20,
    dish: "Chocolate Pudding", 
    rate: 160 
  },
  c21 : { 
    id: 21,
    dish: "Spinach cake", 
    rate: 200 
  }
}

export default function detailsReducer(state = initialState , action) {
    switch (action.type) {
      case DISH:  
        return {
          ...state,
          [action.payload.name] : { 
              dish: state[action.payload.name].dish, 
              rate: state[action.payload.name].rate 
          } 
      } 
        default:
            return state
    }
} 