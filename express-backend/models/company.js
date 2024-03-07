import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema (
    {
        Name: {
            type: String,
            required: true,
            trim: true,
        },
        countryOfIncorperation: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { collection: "Company" }
);

const CompanyModel = mongoose.model("Company", CompanySchema);

export default CompanyModel;
