export default function Main(){
    return(
        <main>
            <form className="ingredient-form">
                <input 
                type="text"
                placeholder="Salt"
                aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}