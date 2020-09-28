export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const DISH = "DISH"
export const LOYAL = "LOYAL"
export const STATUS = "STATUS"

export function increment(name) {
    return {
        type: INCREMENT,
        payload: { name }
    }
}

export function decrement(name) {
    return {
        type: DECREMENT,
        payload: { name }
    }
}

export function dishDetails(name) {
    return {
        type: DISH,
        payload: { name }
    }
} 