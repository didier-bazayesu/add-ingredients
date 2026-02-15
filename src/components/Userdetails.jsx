import React from 'react'
import { useState } from 'react'

function Userdetails() {
    const chefs = [{ isStarfilled: false, name: "Chef Claude", emojiNotFilled:"★", role: "Head Chef", star: "⭐",specialty: "French Cuisine",experience: 15, yearsrestaurant: "La Gourmet Kitchen",emoji: "🧑‍🍳"}];
    let[detailChief , setDetailChief] = useState(chefs);


  return (
    <>
        {detailChief.map((elem,index)=> <div>
                                            <h1>{elem.emoji}</h1> <br />

                                            <p1>chief {elem.isStarfilled? elem.emoji : elem.emojiNotFilled}</p1> <br />
                                            <button>{elem.star}</button> <br />
                                            
                                        </div>)
        }

    </>
  )
}

export default Userdetails