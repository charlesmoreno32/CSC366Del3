import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    company_ownings: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { collection: "Owner" },
);

const Owner = mongoose.model("Owner", OwnerSchema);
export default Owner;