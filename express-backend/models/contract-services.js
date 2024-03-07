import mongoose from "mongoose";
import contractModel from "./contract.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addContract(contract) {
  try {
    const contractToAdd = new contractModel(contract);
    const savedContract = await contractToAdd.save();
    return savedContract;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findContractByID(id) {
  return contractModel.find({ ID: id });
}

export { addContract, findContractByID };
