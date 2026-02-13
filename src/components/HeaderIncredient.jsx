
import { useState } from 'react'


function HeaderIncredient() {
    
      const ingredients = ["Flour", "Sugar", "Eggs"];

      //array of input incridient
      let[ingredient , setincredient] = useState(ingredients);
      

      //taking input value
      let[inputvalue,setinputValue] = useState("")

      //handle input value 
      function handleInputValue (e){  

        /*This is another way of handling input form */

        // const formData = new FormData();
        // const dataInputed = formData.get("current-igredient")  
        //       setinputValue(dataInputed);
        setinputValue(e.target.value);
      }



      //taking incredients from the user input
    function takeIncredient(event){
        event.preventDefault();

        //checking if we have typed something 
        if(!inputvalue.length<1) {
            setincredient((array)=>([
             ...array,
             inputvalue.trim()
                
                
               ]))
               setinputValue("");
            
        }
    }

    //delete the specific incredients
    function deleteFromList(lastIndex){
        setincredient(prev=> ([
          ... prev.filter((__,nowIndex)=> nowIndex !== lastIndex) 
        ]))
    }
   

  return (
    
    // returning the incredient card
    <section className='bg-green-200  p-5 w-max rounded-2xl shadow-xl  mx-auto mt-5 '>
              <p className='font-bold text-4xl   p-5'>👨‍🍳 Didier Chief</p>
        <div className='flex flex-row justify-center '>

            <main>
                  <form action="" className='flex justify-center gap-5 p-10 ' onSubmit={takeIncredient}>
                    <input type="text"
                    value={inputvalue}
                    id='value'
                    name='current-ingredient'
                    
                    onChange={handleInputValue}
                    placeholder='type Incredient ...'
                          className='  flex-1 border border-gray-300 rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-gray-500 ' 

                    
                    />
                    
                <button  className='text-white bg-black p-2 font-bold rounded-[3px]  cursor-pointer hover:text-amber-300 hover:bg-green-600'  type='submit'>+Add incredient</button>
                </form>

            </main>


        </div>
             
             <h2 className='text-2xl  font-extrabold '> Incredient on hand :</h2>

            <ul className=' items-center  mx-auto w-sm rounded-[5px]  shadow-sm bg-green-500 p-5 text-left '>
              {ingredient.map((elem, index) => <li key={index} >🥣{elem} 
                  <button className='text-red-600 hover:text-blue-800 cursor-pointer  transition-all duration-200 hover:bg-amber-400'
                 onClick={()=> {deleteFromList(index)}}>❌</button>
                 </li>)}
            </ul>
    </section>
  )
}

export default HeaderIncredient