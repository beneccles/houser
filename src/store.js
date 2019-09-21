import { createStore } from 'redux'

const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    mortgage: "",
    rent: ""
}

export const HANDLE_NAME = 'HANDLE_NAME'
export const HANDLE_ADDRESS = 'HANDLE_ADDRESS'
export const HANDLE_CITY = 'HANDLE_CITY'
export const HANDLE_STATE = 'HANDLE_STATE'
export const HANDLE_ZIP = 'HANDLE_ZIP'
export const HANDLE_IMG = 'HANDLE_IMG'

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case HANDLE_NAME:
            return {...state, name: payload}
        case HANDLE_ADDRESS:
            return {...state, address: payload}
        case HANDLE_CITY:
            return {...state, city: payload}
        case HANDLE_STATE:
            return {...state, state: payload}
        case HANDLE_ZIP:
            return {...state, zipcode: payload}
        case HANDLE_IMG:
            return {...state, img: payload}
        default:
            return state
        
    }
}

export default createStore(reducer)
