import mongoose from "mongoose";

const WorkSchedulingSchema = new mongoose.Schema(
  {
    EmplId: {
      type: String,
      required: true,
    },
    StartTime: {
      type: Date,
      required: true,
    },
    EndTime: {
      type: Date,
      required: true,
    },
    StoreID: {
      type: String,
      required: true,
    },
  },
  { collection: "WorkScheduling" }
);

const WorkScheduling = mongoose.model("WorkScheduling", WorkSchedulingSchema);
export default WorkScheduling;
