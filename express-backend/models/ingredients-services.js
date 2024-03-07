import mongoose from "mongoose";
import ingredientsModel from "./ingredients.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect("" + process.env.MONGO_URI).catch((error) => console.log(error));

async function addIngredients(ingredients) {
  try {
    const ingredientsToAdd = new ingredientsModel(ingredients);
    const savedIngredients = await ingredientsToAdd.save();
    return savedIngredients;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function findIngredientsByID(id) {
  return ingredientsModel.find({ ID: id });
}

export { addIngredients, findIngredientsByID };
