import React, {createContext, useReducer, useContext} from 'react'
import { UserReducer } from '../reducers/UserReducer'
import { UserActionType, UserContextState, UserContextType } from '../types/Context'
import { CreateUser, deleteUser, getExactUser } from '../api'

const initialState: UserContextState = {
    user: JSON.parse(localStorage.getItem("user") as string) as object ,
    loading: false,
}

export const UserContext = createContext<UserContextType | UserContextState>(initialState)

export const UserContextProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const addUser = async (user: object) => {
        const userData = await getExactUser(user)
        console.log(userData)
        dispatch({type: UserActionType.ADD_USER, payload: userData})
        const loginResponse = await CreateUser(user.access_token)
        return loginResponse
    }
    const logoutUser = async () => {
        dispatch({type: UserActionType.LOGOUT_USER, payload: null})
        const logoutResponse = await deleteUser(state.user.id)
        return logoutResponse
    }
    const isLoading = () => dispatch({type: UserActionType.LOADING_TRUE, payload: null})
    const isNotLoading = () => dispatch({type: UserActionType.LOADING_FALSE, payload: null})

    return (
        <UserContext.Provider value={{
            user: state.user,
            addUser,
            logoutUser,
            isLoading,
            isNotLoading,
            loading: state.loading
        }}>
            {children}
        </UserContext.Provider>    
    )
}