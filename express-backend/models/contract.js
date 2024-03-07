import mongoose from "mongoose";

const ContractSchema = new mongoose.Schema(
  {
    ID: {
      type: Number,
      required: true,
    },
    SupplierID: {
      type: Number,
      required: true,
    },
    StoreID: {
      type: Number,
      required: true,
    },
    ItemID: {
      type: Number,
      required: true,
    },
  },
  { collection: "Contract" }
);

const Contract = mongoose.model("Contract", ContractSchema);
export default Contract;
