import axios from "axios";
import User from "./Types/User";

const BASE_URL = "http://localhost:8000/users";

export interface UsersClient {
  getAll(): Promise<User[] | undefined>;
}

const Users: UsersClient = {
  getAll: async () => {
    const { data } = await axios.get<User[]>(BASE_URL);
    return data;
  },
};

export default Users;
