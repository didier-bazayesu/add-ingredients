import React from 'react'

import { useState } from 'react'

function RenderAtTime() {
    let [renderData , setRenderData] = useState([]);

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

        function handleClick(){
            setRenderData(prev => [...prev, <h1>{allFavoriteThings[prev.length]}</h1>]);
        }

  return (

    <div>
        <button onClick={handleClick} className='font-bold p-2 bg-black text-white cursor-pointer rounded-[5px]'>Click to add!</button>
        <div>{renderData}</div>

    </div>
  )
}

export default RenderAtTime