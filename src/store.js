import { createStore } from 'redux'

const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    image: "",
    mortgage: "",
    rent: ""
}

// Trust me, I can handel this.
export const HANDLE_NAME = 'HANDLE_NAME'
export const HANDLE_ADDRESS = 'HANDLE_ADDRESS'
export const HANDLE_CITY = 'HANDLE_CITY'
export const HANDLE_STATE = 'HANDLE_STATE'
export const HANDLE_ZIP = 'HANDLE_ZIP'
export const HANDLE_IMG = 'HANDLE_IMG'
export const HANDLE_MORTGAGE = 'HANDLE_MORTGAGE'
export const HANDLE_RENT = 'HANDLE_RENT'
export const CLEAR_STATE = 'CLEAR_STATE'
export const HANDLE_IMAGE = 'HANDLE_IMAGE'

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case HANDLE_NAME:
            return { ...state, name: payload }
        case HANDLE_ADDRESS:
            return { ...state, address: payload }
        case HANDLE_CITY:
            return { ...state, city: payload }
        case HANDLE_STATE:
            return { ...state, state: payload }
        case HANDLE_ZIP:
            return { ...state, zipcode: payload }
        case HANDLE_IMAGE:
            return { ...state, image: payload }
        case HANDLE_MORTGAGE:
            return { ...state, mortgage: payload }
        case HANDLE_RENT:
            return { ...state, rent: payload }
        case CLEAR_STATE:
            return {
                name: "",
                address: "",
                city: "",
                state: "",
                zipcode: "",
                image: "",
                mortgage: "",
                rent: ""
            }
        default:
            return state

    }
}

export default createStore(reducer)
