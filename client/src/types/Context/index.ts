import { AxiosResponse } from "axios"

export enum UserActionType {
    ADD_USER = "ADD_USER",
    LOGOUT_USER = "LOGOUT_USER",
    LOADING_TRUE = "LOADING_TRUE",
    LOADING_FALSE = "LOADING_FALSE"
}

export interface UserContextState {
    user: null | object,
    loading: boolean,
}

export interface UserContextAction {
    type: UserActionType
    payload: object | null
}

export interface UserContextType {
    user: object | null,
    addUser: (user: object) => Promise<AxiosResponse>,
    logoutUser: (user: object) => Promise<AxiosResponse>,
    isLoading: () =>  void,
    isNotLoading: () => void,
    loading: boolean
}