import mongoose from "mongoose";
import itemModel from "./item.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addItem(item) {
  try {
    const itemToAdd = new itemModel(item);
    const savedItem = await itemToAdd.save();
    return savedItem;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findItemByID(id) {
  return itemModel.find({ ID: id });
}

export { addItem, findItemByID };
