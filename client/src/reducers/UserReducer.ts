import { UserContextAction, UserContextState } from "../types/Context/signin"
export const UserReducer = (state: UserContextState, action: UserContextAction): UserContextState => {
    switch (action.type) {
        case "ADD_USER": {
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                user: JSON.parse(localStorage.getItem("user") as string) as object
            }
        }
        case "LOGOUT_USER":
            localStorage.removeItem("user")
            return {
                ...state,
                user: null
            }
        case "LOADING_TRUE":
            return {
                ...state,
                loading: true
            }
        case "LOADING_FALSE":
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}