import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: { type: String, require: true },
    firstName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    role: { type: String, require: false },
    description: { type: String, require: false },
    stayconnect: { type: Boolean, require: false },
  },
  { collection: "Users" }
);

export default model("userModel", userSchema);
