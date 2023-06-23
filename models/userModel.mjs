import { Schema, model } from "mongoose";

//model correspondant aux users
const userSchema = Schema(
  {
    name: { type: String, require: true },
    firstName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    stayconnect: { type: Boolean, require: false },
  },
  { collection: "Users" }
);

export default model("userModel", userSchema);
