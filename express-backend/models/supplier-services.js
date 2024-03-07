import mongoose from "mongoose";
import supplierModel from "./supplier.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addSupplier(supplier) {
  try {
    const supplierToAdd = new supplierModel(supplier);
    const savedSupplier = await supplierToAdd.save();
    return savedSupplier;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findSupplierByID(id) {
  return supplierModel.find({ ID: id });
}

export { addSupplier, findSupplierByID };
