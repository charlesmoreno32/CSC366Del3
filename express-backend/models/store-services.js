import mongoose from "mongoose";
import storeModel from "./store.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(
    "" + process.env.MONGO_URI
).catch((error) => console.log(error));

async function addStore(store) {
  try {
    const storeToAdd = new storeModel(store);
    const savedStore = await storeToAdd.save();
    return savedStore;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findStoreByName(name) {
  return storeModel.find({ Name : name});
}

export {
    addStore,
    findStoreByName
};