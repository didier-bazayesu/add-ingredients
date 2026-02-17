import React from 'react'

function OrderRecipe({ recipe }) {
    
  return (
      <section className="mt-10 max-w-3xl mx-auto bg-green-50 rounded-2xl shadow-xl p-8">
             <div>
                <h1>ai here</h1>
                {recipe}
             </div>
          <h2 className="text-3xl font-extrabold text-green-800 mb-6">
              👨‍🍳 Chef Claude Recommends:
          </h2>

          <article
              className="bg-white rounded-xl shadow-md p-6 space-y-6 leading-relaxed"
              aria-live="polite"
          >
              <p className="text-gray-700 text-lg">
                  Based on the ingredients you have available, I would recommend making a simple and delicious
                  <strong className="text-green-700"> Beef Bolognese Pasta</strong>.
              </p>

              <h3 className="text-2xl font-bold text-green-700">
                  Beef Bolognese Pasta
              </h3>

              <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">
                      Ingredients:
                  </h4>

                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>1 lb. ground beef</li>
                      <li>1 onion, diced</li>
                      <li>3 cloves garlic, minced</li>
                      <li>2 tablespoons tomato paste</li>
                      <li>1 (28 oz) can crushed tomatoes</li>
                      <li>1 cup beef broth</li>
                      <li>1 teaspoon dried oregano</li>
                      <li>1 teaspoon dried basil</li>
                      <li>Salt and pepper to taste</li>
                      <li>8 oz pasta (spaghetti, penne, or linguine)</li>
                  </ul>
              </div>

              <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">
                      Instructions:
                  </h4>

                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                      <li>Bring a large pot of salted water to a boil.</li>
                      <li>Cook ground beef over medium-high heat until browned.</li>
                      <li>Add onion and garlic, cook until soft.</li>
                      <li>Stir in tomato paste.</li>
                      <li>Add crushed tomatoes, broth, oregano, basil.</li>
                      <li>Simmer for 15–20 minutes.</li>
                      <li>Cook pasta according to package instructions.</li>
                      <li>Combine pasta with sauce.</li>
                      <li>Serve hot with basil or Parmesan if desired.</li>
                  </ol>
              </div>

          </article>
      </section>

  )
}

export default OrderRecipe