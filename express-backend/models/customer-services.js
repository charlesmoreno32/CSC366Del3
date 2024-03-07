import mongoose from "mongoose";
import customerModel from "./customer.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(
    "" + process.env.MONGO_URI
).catch((error) => console.log(error));

async function addCustomer(customer) {
  try {
    const customerToAdd = new customerModel(customer);
    const savedCustomer = await customerToAdd.save();
    return savedCustomer;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findCustomerByPersonID(id) {
  return customerModel.find({ person_id : id});
}


export {
    addCustomer,
    findCustomerByPersonID
};