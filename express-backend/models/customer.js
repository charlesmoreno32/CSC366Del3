import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    person_id: {
        type: String,
        required: true,
        trim: true
    },
    RewardsOption: {
        type: Boolean,
        required: true,
        trim: true,
    },
    PaymentType: {
        type: String,
        required: true,
        trim: true,
    }
  },
  { collection: "Customer" },
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;