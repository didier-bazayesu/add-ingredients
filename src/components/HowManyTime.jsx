import React from 'react'
import { useState } from 'react'

function HowManyTime() {
    let[count ,setCOunt] = useState(0);
    
    function addCount(){
        setCOunt(prev=> prev+1);
    }

    function substract() {
        setCOunt(prev => prev - 1);
    }

    return (
        <section className="flex items-center justify-center">
            <button className="bg-black text-white rounded-full w-12 h-12 -mr-2  cursor-pointer" onClick={addCount}>+</button>
            <button className="bg-red-500 text-white rounded-full w-24 h-24 ">{ count > 1 ? `${count} counts`: `${count} count`} </button>
            <button className="bg-black text-white rounded-full w-12 h-12 -ml-2 cursor-pointer" onClick={substract}>-</button>
        </section>
    )
}

export default HowManyTime
