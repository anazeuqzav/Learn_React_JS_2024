import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromHF } from "../src/ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const getRecipe = async () => {
    const recipeMarkdown = await getRecipeFromHF(ingredients)
    setRecipe(recipeMarkdown);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  console.log(ingredients);

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && 
        <IngredientsList 
          ingredients= {ingredients} 
          getRecipe = {getRecipe} 
        />
      }

      {recipe && <ClaudeRecipe recipe={recipe} />}
       

    </main>
  );
};

export default Main;
