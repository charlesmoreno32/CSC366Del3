import mongoose from "mongoose";
import orderDetailsModel from "./order-details.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addOrderDetails(orderDetails) {
  try {
    const orderDetailsToAdd = new orderDetailsModel(orderDetails);
    const savedOrderDetails = await orderDetailsToAdd.save();
    return savedOrderDetails;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findOrderDetailsByOrderID(orderID) {
  return orderDetailsModel.find({ OrderID: orderID });
}

export { addOrderDetails, findOrderDetailsByOrderID };
