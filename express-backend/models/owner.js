import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema(
  {
    person_id: {
      type: String,
      required: true,
      trim: true
    },
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    company_ownings: {
      type: Number,
      required: true,
      trim: true,
    }
  },
  { collection: "Owner" }
);

const Owner = mongoose.model("Owner", OwnerSchema);
export default Owner;