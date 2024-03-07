import mongoose from "mongoose";

const CustomerOrderSchema = new mongoose.Schema (
    {
        customerID: {
            type: String,
            required: true,
            trim: true,
        },
        storeID: {
            type: String,
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
        }
    }, 
    { collection: "CustomerOrder" }
);

const CustomerOrder = mongoose.model("CustomerOrder", CustomerOrderSchema);

export default CustomerOrder;
