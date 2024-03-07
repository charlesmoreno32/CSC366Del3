import mongoose from "mongoose";

const IngredientsSchema = new mongoose.Schema(
  {
    ID: {
      type: Number,
      required: true,
    },
  },
  { collection: "Ingredients" }
);

const Ingredients = mongoose.model("Ingredients", IngredientsSchema);
export default Ingredients;
