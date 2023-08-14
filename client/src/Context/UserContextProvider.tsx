import React, { createContext, useReducer, useContext } from "react";
import { UserReducer } from "../reducers/UserReducer";
import {
  UserActionType,
  UserContextState,
  UserContextType,
} from "../types/Context";
import { CreateUser, deleteUser, getExactUser } from "../api";

const initialState: UserContextState = {
  user: JSON.parse(localStorage.getItem("user") as string) as object,
  loading: false,
};

export const UserContext = createContext<UserContextType | UserContextState>(
  initialState
);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const addUser = async (user: object) => {
    console.log("working here")
    const userData = await getExactUser(user);
    console.log("working here")
    const loginResponse = await CreateUser(user.access_token);
    console.log("hello world")
    if(loginResponse.status === 200) {
      console.log("helloworl")
      dispatch({ type: UserActionType.ADD_USER, payload: userData.data });
    }
    return loginResponse;
  };
  const logoutUser = async (user: object) => {
    console.log(user.email, user.id)
    const logoutResponse = await deleteUser(user.id, user.email);
    if(logoutResponse.status === 200) {
      dispatch({ type: UserActionType.LOGOUT_USER, payload: null });
    }
    return logoutResponse;
  };
  const isLoading = () =>
    dispatch({ type: UserActionType.LOADING_TRUE, payload: null });
  const isNotLoading = () =>
    dispatch({ type: UserActionType.LOADING_FALSE, payload: null });

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        addUser,
        logoutUser,
        isLoading,
        isNotLoading,
        loading: state.loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
