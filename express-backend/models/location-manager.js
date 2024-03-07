import mongoose from "mongoose";

const LocationManagerSchema = new mongoose.Schema(
  {
    ContractID: {
      type: Number,
      required: true,
    },
  },
  { collection: "LocationManager" }
);

const LocationManager = mongoose.model("LocationManager", LocationManagerSchema);
export default LocationManager;
