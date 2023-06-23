import { Schema, model } from "mongoose";

//model correspondant aux badgeages
const badgeageSchema = Schema(
  {
    heure: { type: String, require: true },
    date: { type: String, require: true },
    userID: { type: String, require: true },
    valid: { type: Boolean, require: false },
  },
  { collection: "Badgeages" }
);

export default model("badgModel", badgeageSchema);
