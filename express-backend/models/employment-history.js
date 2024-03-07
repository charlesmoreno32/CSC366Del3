import mongoose from "mongoose";

const EmploymentHistorySchema = new mongoose.Schema(
  {
    EmplID: {
      type: Number,
      required: true,
    },
    Date: {
      type: Date,
      required: true,
    },
    EmploymentStatus: {
      type: Boolean,
      required: true,
    },
    JobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    Salary: {
      type: Number,
      required: true,
    },
  },
  { collection: "EmploymentHistory" }
);

const EmploymentHistory = mongoose.model("EmploymentHistory", EmploymentHistorySchema);
export default EmploymentHistory;
