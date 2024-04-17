import { Request, Response } from "express";
import UsersModel from "../database/models/UserModel";

const userController = {
  getUsers: async (req: Request, res: Response) => {
    const users = await UsersModel.find({});
    res.json(users);
  },
};

export default userController;
