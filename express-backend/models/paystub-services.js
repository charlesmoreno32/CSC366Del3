import mongoose from "mongoose";
import payStubModel from "./paystub.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addPayStub(payStub) {
  try {
    const payStubToAdd = new payStubModel(payStub);
    const savedPayStub = await payStubToAdd.save();
    return savedPayStub;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findPayStubByWeek(payWeek) {
  return payStubModel.find({ PayWeek: payWeek });
}

export { addPayStub, findPayStubByWeek };
