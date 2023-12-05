import { AxiosResponse } from "axios"

export enum UserActionType {
    ADD_USER = "ADD_USER",
    LOGOUT_USER = "LOGOUT_USER",
    LOADING_TRUE = "LOADING_TRUE",
    LOADING_FALSE = "LOADING_FALSE"
}

export interface IUser {
    email: string
    given_name: string,
    id: string,
    name: string,
    picture: string,
    verified_email: boolean
}

export interface UserContextState {
    user: IUser | null,
    loading: boolean,
}

export interface UserContextAction {
    type: UserActionType
    payload: IUser | null
}

export interface UserContextType {
    user: IUser | null,
    addUser: (user: {access_token: string}) => Promise<AxiosResponse<{createdUser: IUser}>>,
    logoutUser: () => void,
    isLoading: () =>  void,
    isNotLoading: () => void,
    loading: boolean
}
