import { AuthAction, AuthState, AuthTypes } from "./types"

const initialState: AuthState = {
    loadingSingInRequest: false,
    isSingnedIn: false,
    error: false,
    token: null
}

export default function auth(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthTypes.LOAD_REQUEST:
            return {
                ...state,
                loadingSingInRequest: true,
            }
        case AuthTypes.LOAD_SUCCCES:
            return {
                ...state,
                loadingSingInRequest: false,
                isSingnedIn: true,
                token: action.payload.token
            }
        case AuthTypes.LOAD_FAILURE:
            return {
                ...state,
                error: true,
            }
        default:
            return {
                ...state
            }
    }
}