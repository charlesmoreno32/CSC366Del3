import mongoose from "mongoose";
import productModel from "./product.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addProduct(product) {
  try {
    const productToAdd = new productModel(product);
    const savedProduct = await productToAdd.save();
    return savedProduct;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findProductByID(id) {
  return productModel.find({ ID: id });
}

export { addProduct, findProductByID };
