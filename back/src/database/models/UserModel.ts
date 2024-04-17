import { Schema, Types, model } from "mongoose";

interface User {
  _id: Types.ObjectId;
  name: string;
}

const UserSchema: Schema = new Schema(
  {
    name: String,
  },
  { collection: "users", strict: "throw", timestamps: true }
);

const UsersModel = model<User>("User", UserSchema);

module.exports = UsersModel;
export default UsersModel;
