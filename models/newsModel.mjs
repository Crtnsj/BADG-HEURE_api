import { Schema, model } from "mongoose";

const newsSchema = Schema(
  {
    type: { type: Number, require: false },
    important: { type: Boolean, require: false },
    data: { type: String, require: true },
  },
  { collection: "News" }
);

export default model("newsModel", newsSchema);
