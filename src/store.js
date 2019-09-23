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
export const HANDLE_STEP1 = 'HANDLE_STEP1'
export const HANDLE_STEP3 = 'HANDLE_STEP3'
export const CLEAR_STATE = 'CLEAR_STATE'
export const HANDLE_IMAGE = 'HANDLE_IMAGE'

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case HANDLE_STEP1:
            return {...state, ...payload}
        case HANDLE_STEP3:
            return {...state, ...payload}
        case HANDLE_IMAGE:
            return { ...state, image: payload }
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
