import React from 'react'
import { useState } from 'react'
import OrderRecipe from './OrderRecipe'


function RecipeComponent() {
    let [recipeShown, setRecipeShown] = useState(false)
    //get data from recipe 
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

  return (
    <>
      <div className="bg-gray-100 p-8">
          <div className="flex items-center justify-between max-w-4xl">
              <div>
                  <h3 className="text-gray-800 text-lg font-semibold mb-1">Ready for a recipe?</h3>
                  <p className="text-gray-500 text-sm">Generate a recipe from your list of ingredients.</p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md ml-8 whitespace-nowrap cursor-pointer"
                      onClick={toggleRecipeShown}>
                  Get a recipe
              </button>
          </div>
      </div>


      { recipeShown && <OrderRecipe/> }
    </>
  )
}

export default RecipeComponent