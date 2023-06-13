import { Schema, model } from "mongoose";

const companySchema = Schema(
  {
    employee: { type: Number, require: true },
    creationDate: { type: Number, require: true },
    middleAge: { type: Number, require: true },
    logo: { type: String, require: true },
  },
  { collection: "Company" }
);

export default model("companyModel", companySchema);
