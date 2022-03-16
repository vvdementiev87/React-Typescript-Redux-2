import axios from "axios";
import { AppDispatch } from "../..";
import { Iuser } from "../../../models/IUser";
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingaction,
  SetUserAction,
} from "./types";

export const AuthactionCreators = {
  setUser: (user: Iuser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingaction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: payload,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthactionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await axios.get<Iuser[]>("../users.json");
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthactionCreators.setIsAuth(true));
            dispatch(AuthactionCreators.setUser(mockUser));
          } else {
            dispatch(AuthactionCreators.setError("Wrong Username or Password"));
          }
          dispatch(AuthactionCreators.setIsLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(AuthactionCreators.setError("Ошибка" + e));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      dispatch(AuthactionCreators.setUser({} as Iuser));
      dispatch(AuthactionCreators.setIsAuth(false));
    } catch (e) {
      dispatch(AuthactionCreators.setError("Ошибка" + e));
    }
  },
};
