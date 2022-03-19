import axios, { AxiosResponse } from "axios";
import { Iuser } from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<Iuser[]>> {
    return axios.get<Iuser[]>("./users.json");
  }
}
