import mongoose from "mongoose";
import employeeModel from "./employee.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(
    "" + process.env.MONGO_URI
).catch((error) => console.log(error));

async function addEmployee(employee) {
  try {
    const employeeToAdd = new employeeModel(employee);
    const savedEmployee = await employeeToAdd.save();
    return savedEmployee;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export {
    addEmployee
};