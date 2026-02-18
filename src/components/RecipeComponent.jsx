import React, { useState } from "react";
import OrderRecipe from "./OrderRecipe";
import Modal from "./RecipeModal";

function RecipeComponent({ ingredient }) {
    const ingredientMessage = ingredient.join(",");
    const [recipe, setRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    async function handleGetRecipe() {
        try {
            setIsLoading(true);
            const response = await fetch("/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: ingredientMessage }),
            });

            if (!response.ok) throw new Error(`Server error: ${response.status}`);

            const data = await response.json();
            setRecipe(data.reply || "No recipe generated.");
            setShowModal(true);
        } catch (err) {
            console.error("Error fetching recipe:", err);
            setRecipe("Problem in getting recipe.");
            setShowModal(true);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="bg-gray-100 p-8">
                <div className="flex items-center justify-between max-w-4xl">
                    <div>
                        <h3 className="text-gray-800 text-lg font-semibold mb-1">
                            Ready for a recipe?
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Generate a recipe from your list of ingredients.
                        </p>
                    </div>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition"
                        disabled={isLoading}
                        onClick={handleGetRecipe}
                    >
                        {isLoading ? "Generating..." : "Get a recipe"}
                    </button>
                </div>
            </div>

            {/* Professional Modal */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <OrderRecipe recipe={recipe} />
                </Modal>
            )}
        </>
    );
}

export default RecipeComponent;
