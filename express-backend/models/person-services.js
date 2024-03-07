import mongoose from "mongoose";
import personModel from "./person.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(
    "" + process.env.MONGO_URI
).catch((error) => console.log(error));

async function addPerson(person) {
  try {
    const personToAdd = new personModel(person);
    const savedPerson = await personToAdd.save();
    return savedPerson;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findPersonByFirstName(name) {
  return personModel.find({ FirstName : name});
}

export {
    addPerson,
    findPersonByFirstName
};