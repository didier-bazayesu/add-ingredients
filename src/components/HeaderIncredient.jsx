import { useEffect, useState } from 'react';

function HeaderIncredient() {

  const ingredients = ["Flour", "Sugar", "Eggs"];

  // array of input ingredients
  let [ingredient, setincredient] = useState(() => {
    try {
      const saved = localStorage.getItem('ingredients');
      return saved ? JSON.parse(saved) : ingredients;
    } catch (e) {
      console.log(e);
      return ingredients;
    }
  });

  // rendering for each user input ingredient
  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredient));
  }, [ingredient]);

  // taking input value
  let [inputvalue, setinputValue] = useState("");

  // handle input value
  function handleInputValue(e) {
    setinputValue(e.target.value);
  }

  // taking ingredients from the user input
  function takeIncredient(event) {
    event.preventDefault();

    // checking if we have typed something
    if (inputvalue.trim().length > 0) {
      setincredient((array) => [
        ...array,
        inputvalue.trim()
      ]);
      setinputValue("");
    } else {
      console.log("the input length is invalid");
    }
  }

  // delete the specific ingredients
  function deleteFromList(lastIndex) {
    setincredient(prev => [
      ...prev.filter((__, nowIndex) => nowIndex !== lastIndex)
    ]);
  }

  return (
    // returning the ingredient card
    <section className='bg-green-100 p-5 w-max rounded-2xl shadow-xl mx-auto mt-5'>
      <div className='flex '>
        <img src='./images/Chef Claude Icon.png' className='w-16 h-20' /> 
        <span className='font-bold text-4xl p-5'>Chief claude</span>
      </div>
     
      

      <div className='flex flex-row justify-center'>
        <main>
          <form
            action=""
            className='flex justify-center gap-5 p-10'
            onSubmit={takeIncredient}
          >
            <input
              type="text"
              value={inputvalue}
              id='value'
              name='current-ingredient'
              onChange={handleInputValue}
              placeholder='type Incredient ...'
              className='flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500'
              defaultValue="sezame"
            />

            < button
              className='text-black bg-green-200 p-2 font-bold rounded-[3px] border-white border cursor-pointer hover:text-amber-300 hover:bg-green-600'
              type='submit'
            >
              +Add incredient
            </button>
          </form>
        </main>
      </div>

      <h2 className='text-2xl font-extrabold'>Ingredient on hand :</h2>

      <ul className='items-center mx-auto w-sm rounded-[5px] shadow-sm bg-green-50 p-5 text-left'>
        {ingredient.map((elem, index) => (
          <li key={index}>
            🥣{elem}
            <button
              className='text-red-600 hover:text-blue-800 cursor-pointer transition-all duration-200 hover:bg-amber-400'
              onClick={() => { deleteFromList(index) }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HeaderIncredient;
