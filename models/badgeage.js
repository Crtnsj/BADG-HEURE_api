import { Schema, model } from "mongoose";

const badgeageSchema = Schema({
  heure: { type: String, require: true },
  date: { type: String, require: true },
  userID: { type: String, require: true },
  valid: { type: Boolean, require: true },
});

export default model("badgeage", badgeageSchema);
