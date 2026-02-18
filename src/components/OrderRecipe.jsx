import React from 'react'
import ReactMarkdown from 'react-markdown'

function OrderRecipe({ recipe }) {
    return (
        <section className="mt-10 max-w-3xl mx-auto  rounded-2xl shadow-2xl p-8 bg-amber-500">
            <h2 className="text-3xl font-extrabold text-green-800 mb-6">
                👨‍🍳 Didier Chef Recommends:
            </h2>

            <article className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                {recipe ? (
                    <ReactMarkdown>{recipe}</ReactMarkdown>
                ) : (
                    "Your Gemini recipe will appear here once it has been generated."
                )}
            </article>
        </section>
    )
}

export default OrderRecipe