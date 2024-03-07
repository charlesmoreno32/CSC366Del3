import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    ID: {
      type: Number,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    TaxRate: {
      type: Number,
      required: true,
    },
    Recipe: {
      type: String,
      default: null,
      trim: true,
    },
  },
  { collection: "Product" }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
