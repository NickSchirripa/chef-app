import {useState} from "react"
import IngredientList from "./Ingredients.jsx"
import Recipe from "./Recipe.jsx"

export default function Main(){


const [ingredients, setIngrediants] = useState([])



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
           ingredients.length > 0 ? 
                <IngredientList
                ingredients= {ingredients}
                 //below is the simple  function that swaps the boolean, to make the  recipeShown switch, thus launch the Recipe comp
                toggleRecipe = {toggle}
                    />
            : null
            }
           {
           recipeShown ? <Recipe/>
            : null}
        </main>
    )
}
