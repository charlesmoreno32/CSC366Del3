import mongoose from "mongoose";
import CompanyModel from "./company.js"; 
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addCompany(company) {
  try {
    const companyToAdd = new CompanyModel(company);
    const savedCompany = await companyToAdd.save();
    return savedCompany;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export {
    addCompany
};
