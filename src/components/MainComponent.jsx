import { useEffect, useState } from 'react';
import RecipeComponent from './RecipeComponent';
import ListIngredient from './ListIngredient';


function HeaderIncredient() {

  const ingredients = ["Flour", "Sugar", "Eggs"];
  let [ingredient, setIngredient] = useState(() => {
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
    console.log('renderd')
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
      setIngredient((array) => [
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
    setIngredient(prev => [
      ...prev.filter((__, nowIndex) => nowIndex !== lastIndex)
    ]);
  }
  return (
    // returning the ingredient card
    <section className='bg-green-100 p-5 w-max rounded-2xl shadow-xl mx-auto mt-5'>
      <div className='flex'>
        <img src='./images/Chef Claude Icon.png' className='w-16 h-20' />
        <span className='font-bold text-4xl p-5'>Chief Claude</span>
      </div>

      <div className='flex flex-row justify-center'>
        <main>
          <form
            className='flex justify-center gap-5 p-10'
            onSubmit={takeIncredient}
          >
            <input
              type="text"
              value={inputvalue}
              name='current-ingredient'
              onChange={handleInputValue}
              placeholder='Type ingredient...'
              className='flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500'
            />

            <button
              className='text-black bg-white p-2 font-bold rounded-[3px] border-gray-300 border cursor-pointer hover:text-amber-300 hover:bg-green-600'
              type='submit'
            >
              + Add ingredient
            </button>
          </form>
        </main>
      </div>

      {ingredient.length > 0 && (
        <section>
          <ListIngredient ingredient={ingredient} deleteFromList={deleteFromList}/>

          {ingredient.length > 3 && (
            <div className='pt-10'>
              <RecipeComponent ingredient={ingredient}/>
            </div>
          )}
        </section>
      )}

    </section>

  );
}
export default HeaderIncredient;
