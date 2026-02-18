import { useEffect, useState } from 'react';
import RecipeComponent from './RecipeComponent';

function MainComponent() {
  const defaultIngredients = ["Flour", "Sugar", "Eggs"];
  const [ingredient, setIngredient] = useState(() => {
    try {
      const saved = localStorage.getItem('ingredients');
      return saved ? JSON.parse(saved) : defaultIngredients;
    } catch {
      return defaultIngredients;
    }
  });

  const [inputvalue, setinputValue] = useState("");

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredient));
  }, [ingredient]);

  function handleInputValue(e) {
    setinputValue(e.target.value);
  }

  function takeIngredient(event) {
    event.preventDefault();
    if (inputvalue.trim().length > 0) {
      setIngredient((array) => [...array, inputvalue.trim()]);
      setinputValue("");
    }
  }

  function deleteFromList(index) {
    setIngredient(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="bg-mesh min-h-screen flex items-center justify-center">
      <section className="bg-white/30 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-4xl mx-auto border border-white/20">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img src="./images/Chef Claude Icon.png" className="w-16 h-20" />
          <div>
            <h1 className="font-bold text-4xl font-['Playfair_Display']">Chief Assistant</h1>
            <p className="text-gray-700">Smart Kitchen Assistant</p>
          </div>
        </div>

        {/* Input Form */}
        <form className="flex gap-4 mb-8" onSubmit={takeIngredient}>
          <input
            type="text"
            value={inputvalue}
            onChange={handleInputValue}
            placeholder="🍗 Type an ingredient..."
            className="flex-1 px-4 py-2 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            className="px-6 py-2 rounded-lg bg-linear-to-r from-green-400 to-blue-500 text-white font-semibold shadow hover:from-green-500 hover:to-blue-600 transition-all cursor-pointer"
            type="submit"
          >
            + Add ingredient
          </button>
        </form>

        {/* Ingredient Pills */}
        {ingredient.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-3 text-gray-800 ">Ingredients on hand:</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {ingredient.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/20 text-gray-800 font-medium shadow-sm"
                >
                  {item}
                  <button
                    onClick={() => deleteFromList(index)}
                    className="text-gray-600 hover:text-red-500 font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>

            {/* Recipe Section */}
            {ingredient.length > 3 && (
              <div className="text-center">
                
                <RecipeComponent ingredient={ingredient} />
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default MainComponent;