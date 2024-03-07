import mongoose from "mongoose";

const OrderDetailsSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    OrderID: {
      type: Number,
      required: true,
    },
    ProductID: {
      type: Number,
      required: true,
    },
  },
  { collection: "OrderDetails" }
);

const OrderDetails = mongoose.model("OrderDetails", OrderDetailsSchema);
export default OrderDetails;
