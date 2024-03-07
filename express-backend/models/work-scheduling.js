import mongoose from "mongoose";

const WorkSchedulingSchema = new mongoose.Schema(
  {
    EmplId: {
      type: Number,
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
      type: Number,
      required: true,
    },
  },
  { collection: "WorkScheduling" }
);

const WorkScheduling = mongoose.model("WorkScheduling", WorkSchedulingSchema);
export default WorkScheduling;
