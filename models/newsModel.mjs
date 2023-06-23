import { Schema, model } from "mongoose";

//model correspondant aux news
const newsSchema = Schema(
  {
    type: { type: String, require: false },
    important: { type: Boolean, require: false },
    content: { type: String, require: true },
  },
  { collection: "News" }
);

export default model("newsModel", newsSchema);
