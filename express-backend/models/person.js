import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true,
    },
    FirstName: {
        type: String,
        required: true,
        trim: true,
    },
    LastName: {
        type: String,
        required: true,
        trim: true,
    }

  },
  { collection: "Person" },
);

const Person = mongoose.model("Person", PersonSchema);
export default Person;