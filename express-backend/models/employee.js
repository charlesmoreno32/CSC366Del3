import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    person_id: {
        type: String,
        required: true,
        trim: true
    },
    SSN: {
      type: Number,
      required: true,
      trim: true,
    },
    StoreID: {
        type: String,
        required: true,
        trim: true,
    }
  },
  { collection: "Employee" },
);

const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;