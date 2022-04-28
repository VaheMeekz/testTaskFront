import { SIGN_IN_POST } from "../types"

const initialState = {
    auth: false,
    token:null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_POST:
            return {
                ...state,
                auth:true,
                token:action.payload.token
            }
        default:
            return state
    }
}