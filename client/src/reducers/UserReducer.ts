import {
  IUser,
  UserContextAction,
  UserContextState,
} from "../types/Context/signin";
import CryptoJS from "crypto-js";

export const UserReducer = (
  state: UserContextState,
  action: UserContextAction
): UserContextState => {
  switch (action.type) {
    case "ADD_USER": {
      localStorage.setItem("user", JSON.stringify(action.payload));
      const id = (JSON.parse(localStorage.getItem("user") as string) as IUser)
        .id;
      const encryptedId = CryptoJS.AES.encrypt(
        id,
        process.env.CRYPTO_SECRET_KEY
      );
      const encryptedIdString = encryptedId.toString();

      return {
        ...state,
        user: {
          ...(JSON.parse(localStorage.getItem("user") as string) as IUser),
          id: encryptedIdString,
        },
      };
    }
    case "LOGOUT_USER":
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
      };
    case "LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
