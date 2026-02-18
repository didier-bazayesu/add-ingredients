import React from "react";
import ReactMarkdown from "react-markdown";

function OrderRecipe({ recipe }) {
    return (
        <section className="mt-10 max-w-3xl mx-auto rounded-3xl shadow-2xl p-8 bg-gradient-to-r from-green-100 via-yellow-100 to-pink-100 border border-green-200">

            {/* Header - centered */}
            <h2 className="text-3xl font-extrabold text-green-900 mb-6 text-center">
                👨‍🍳  Chef Assistant Recommends:
            </h2>

            {/* Recipe Content - left aligned */}
            <article className="whitespace-pre-wrap text-gray-800 leading-relaxed text-lg p-6 bg-white/50 rounded-2xl shadow-inner text-left">
                {recipe ? (
                    <ReactMarkdown>{recipe}</ReactMarkdown>
                ) : (
                    <p className="text-gray-600 italic">
                        Your Gemini recipe will appear here once it has been generated.
                    </p>
                )}
            </article>
        </section>
    );
}

export default OrderRecipe;
