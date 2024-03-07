import mongoose from "mongoose";
import workSchedulingModel from "./work-scheduling.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addWorkScheduling(workScheduling) {
  try {
    const workSchedulingToAdd = new workSchedulingModel(workScheduling);
    const savedWorkScheduling = await workSchedulingToAdd.save();
    return savedWorkScheduling;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findWorkSchedulingByEmplId(emplId) {
  return workSchedulingModel.find({ EmplId: emplId });
}

export { addWorkScheduling, findWorkSchedulingByEmplId };
