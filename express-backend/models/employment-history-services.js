import mongoose from "mongoose";
import employmentHistoryModel from "./employment-history.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addEmploymentHistory(employmentHistory) {
  try {
    const employmentHistoryToAdd = new employmentHistoryModel(employmentHistory);
    const savedEmploymentHistory = await employmentHistoryToAdd.save();
    return savedEmploymentHistory;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findEmploymentHistoryByEmplID(emplID) {
  return employmentHistoryModel.find({ EmplID: emplID });
}

export { addEmploymentHistory, findEmploymentHistoryByEmplID };
