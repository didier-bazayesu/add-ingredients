import React from 'react'

function ListIngredient({ ingredient, deleteFromList }) {
  return (
    <div>

        <h2 className='text-2xl ml-2 font-extrabold'>
            Ingredients on hand:
        </h2>

        <ul className='items-center mx-auto w-sm rounded-[5px] shadow-sm bg-green-50 p-5 text-left'>
            {ingredient.map((elem, index) => (
                <li key={index}>
                    🥣 {elem}
                    <button
                        className='text-red-600 hover:text-blue-800 cursor-pointer transition-all duration-200 hover:bg-amber-400'
                        onClick={() => deleteFromList(index)}
                    >
                        ❌
                    </button>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default ListIngredient