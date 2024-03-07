import mongoose from "mongoose";
import CustomerOrderModel from "./customer-order.js"; 
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addCustomerOrder(customerOrder) {
  try {
    console.log(process.env.MONGO_URI);
    const customerOrderToAdd = new CustomerOrderModel(customerOrder);
    console.log(customerOrderToAdd);
    const savedCustomerOrder = await customerOrderToAdd.save();
    return savedCustomerOrder;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export {
    addCustomerOrder
};
