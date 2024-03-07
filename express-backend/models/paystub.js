import mongoose from "mongoose";

const PayStubSchema = new mongoose.Schema(
  {
    EmplID: {
      type: Number,
      required: true,
    },
    PayWeek: {
      type: Date,
      required: true,
    },
    GrossPay: {
      type: Number,
      required: true,
    },
    Overtime: {
      type: Number,
      required: true,
    },
    TaxPercentage: {
      type: Number,
      required: true,
    },
  },
  { collection: "PayStub" }
);

const PayStub = mongoose.model("PayStub", PayStubSchema);
export default PayStub;
