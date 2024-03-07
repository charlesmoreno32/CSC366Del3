import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    City: {
        type: String,
        required: true,
        trim: true,
    },
    State: {
        type: String,
        required: true,
        trim: true,
    }
  },
  { collection: "Store" },
);

const Store = mongoose.model("Store", StoreSchema);
export default Store;