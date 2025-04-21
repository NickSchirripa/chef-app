import {useState} from "react"

export default function Main(){


const [ingredients, setIngrediants] = useState([])

const ingrediantList = ingredients.map(items=> <li>{items}</li>)

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngrediants(prevItems=> [...prevItems, newIngredient])
    }
    return(
        <main>
            <form onSubmit= {handleSubmit} className="ingredient-form">
                <input 
                type="text"
                placeholder="Salt"
                aria-label="Add ingredient"
                name= "ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingrediantList}
            </ul>
        </main>
    )
}