import mongoose from "mongoose";
import locationManagerModel from "./locationManager.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addLocationManager(locationManager) {
  try {
    const locationManagerToAdd = new locationManagerModel(locationManager);
    const savedLocationManager = await locationManagerToAdd.save();
    return savedLocationManager;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findLocationManagerByContractID(contractID) {
  return locationManagerModel.find({ ContractID: contractID });
}

export { addLocationManager, findLocationManagerByContractID };
