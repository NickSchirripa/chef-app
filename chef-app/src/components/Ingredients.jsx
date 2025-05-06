

export default function IngredientList(props){
    const ingredientList = props.ingredients.map(items=> <li>{items}</li>)

    return(
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredientList" aria-live="polite">{ingredientList}</ul>
                {
                //nested ternary that renders once ingredients are  more than 4
                props.ingredients.length > 4 ? <div className="receipeContainer">
                    <div>
                        <h3> Ready for recipe?</h3>
                        <p>Generate a recipe from your list of ingredients!</p>
                    </div>
                    <button onClick={props.toggleRecipe}>Get a recipe</button>
                </div>
                : null
                }
            </section> 
    )
}