import mongoose from "mongoose";
import ownerModel from "./owner.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(
    "" + process.env.MONGO_URI
).catch((error) => console.log(error));

async function addOwner(owner) {
  try {
    console.log(process.env.MONGO_URI);
    const ownerToAdd = new ownerModel(owner);
    console.log(ownerToAdd);
    const savedOwner = await ownerToAdd.save();
    return savedOwner;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export {
    addOwner
};
