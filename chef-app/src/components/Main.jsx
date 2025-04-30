import {useState} from "react"

export default function Main(){


const [ingredients, setIngrediants] = useState([])


const ingredientList = ingredients.map(items=> <li>{items}</li>)

//adds ingredient from input
function addIngredient(formData){
   
    const newIngredient = formData.get("ingredient")

    //React state set function that pushes new item to the array
     setIngrediants(prevItems=> [...prevItems, newIngredient])
    
    }

    //boolean for toggle to show recipe
const [recipeShown, setRecipeShown] = useState(false)

    //toggle  from true to false. Put on show reciepe button
function toggle(){
    setRecipeShown(prevRecipeShown => !prevRecipeShown)
}

    return(
        <main>
            <form action= {addIngredient} className="ingredient-form">
                <input 
                type="text"
                placeholder="Salt"
                aria-label="Add ingredient"
                name= "ingredient"
                />
                <button>Add Ingredient</button>
            </form>
           {
            //ternary the using conditional rendering. renders when ingredients are more than 1
           ingredients.length > 0 ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredientList" aria-live="polite">{ingredientList}</ul>
                {
                //nested ternary that renders once ingredients are  more than 4
                ingredients.length > 4 ? <div className="receipeContainer">
                    <div>
                        <h3> Ready for recipe?</h3>
                        <p>Generate a recipe from your list of ingredients!</p>
                    </div>
                    <button onClick={toggle}>Get a recipe</button>
                </div>
                : null
                }
            </section> 
            : null
            }
           {
           recipeShown ? <section>
                <h1>TEST</h1>
            </section>
            : null}
        </main>
    )
}