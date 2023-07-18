import React, {createContext, useReducer, useContext} from 'react'
import { UserReducer } from '../reducers/UserReducer'
import { UserActionType, UserContextState, UserContextType } from '../types/Context'

const initialState: UserContextState = {
    user: JSON.parse(localStorage.getItem("user") as string) as object ,
    loading: false,
}

export const UserContext = createContext<UserContextType | UserContextState>(initialState)

export const UserContextProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const addUser = (user: object) => dispatch({type: UserActionType.ADD_USER, payload: user})
    const logoutUser = () => dispatch({type: UserActionType.LOGOUT_USER, payload: null})
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