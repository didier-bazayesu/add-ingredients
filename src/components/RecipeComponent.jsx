import React, { useState } from 'react';
import OrderRecipe from './OrderRecipe';

function RecipeComponent({ ingredient }) {
    const ingredientMessage  = ingredient.join(',');
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Toggle recipe visibility
    function toggleRecipeShown() {
        setRecipeShown(prev => !prev);
    }

    // Fetch recipe from backend
    async function handleGetRecipe() {
        try {
            setIsLoading(true);
            const response = await fetch("/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: ingredientMessage }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            setRecipe(data.reply || "No recipe generated.");
        } catch (err) {
            console.error("Error fetching recipe:", err);
            setRecipe("Error fetching recipe.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="bg-gray-100 p-8">
                <div className="flex items-center justify-between max-w-4xl">
                    <div>
                        <h3 className="text-gray-800 text-lg font-semibold mb-1">Ready for a recipe?</h3>
                        <p className="text-gray-500 text-sm">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={isLoading}
                        onClick={() => {
                            if (!recipeShown) {
                                toggleRecipeShown();
                            }
                            handleGetRecipe();
                        }}
                    >
                        {isLoading ? "Generating..." : "Get a recipe"}
                    </button>
                </div>
            </div>

            {recipeShown && <OrderRecipe recipe={recipe} />}
        </>
    );
}

export default RecipeComponent;