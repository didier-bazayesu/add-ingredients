import React, { useState } from 'react';
import OrderRecipe from './OrderRecipe';

function RecipeComponent({ ingredient }) {
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState("");

    // Toggle recipe visibility
    function toggleRecipeShown() {
        setRecipeShown(prev => !prev);
    }
    // Fetch recipe from Gemini AI
    async function getRecipe() {
        try {
            const response = await fetch(
                "https://gemini.googleapis.com/v1/models/text-bison-001:generate", // Gemini endpoint
                {
                    method: "POST",
                    headers: {
                        "Authorization": " ",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        prompt: `I have these ingredients: ${ingredient.join(", ")}. Suggest a recipe I can make.`,
                        max_output_tokens: 300
                    })
                }
            );

            const data = await response.json();

            if (data?.candidates && data.candidates.length > 0) {
                setRecipe(data.candidates[0].content);
            } else if (data?.error) {
                setRecipe(`Error: ${data.error.message}`);
            } else {
                setRecipe("Failed to generate recipe.");
            }
        } catch (err) {
            console.error("Error fetching recipe:", err);
            setRecipe("Error fetching recipe.");
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
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md cursor-pointer"
                        onClick={() => {
                            toggleRecipeShown();
                            getRecipe();
                        }}
                    >
                        Get a recipe
                    </button>
                </div>
            </div>

            {recipeShown && <OrderRecipe recipe={recipe} />}
        </>
    );
}

export default RecipeComponent;
