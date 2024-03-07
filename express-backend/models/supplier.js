import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
  {
    ID: {
      type: Number,
      required: true,
    },
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Address: {
      type: String,
      required: true,
      trim: true,
    },
    PhoneNo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "Supplier" }
);

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;
