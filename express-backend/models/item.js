import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
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
    Cost: {
      type: Number,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
  },
  { collection: "Item" }
);

const Item = mongoose.model("Item", ItemSchema);
export default Item;
