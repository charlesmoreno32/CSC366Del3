import mongoose from "mongoose";

const CustomerOrderSchema = new mongoose.Schema (
    {
        orderID: {
            type: Number,
            required: true,
            trim: true,
        },
        customerID: {
            type: Number,
            required: true,
            trim: true,
        },
        storeID: {
            type: Number,
            required: true,
            trim: true,
        },
        orderDate: {
            type: Date,
            required: true,
            trim: true,
        },
        totalAmount: {
            type: Number, 
            required: true,
            trim: true,
        },
        paymentType: {
            type: String,
            required: true,
            trim: true,
        },
    }
);

const CustomerOrderModel = mongoose.model("CustomerOrder", CustomerOrderSchema);

export default CustomerOrderModel;
