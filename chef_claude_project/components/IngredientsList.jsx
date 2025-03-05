/* eslint-disable react/prop-types */
const IngredientsList = (props) => {

    const ingredientListItems = props.ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ));

    return (
        <section>
        <h2>Ingredients on hand: </h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientListItems}
        </ul>

        {props.ingredients.length >= 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    )
    
}


export default IngredientsList;