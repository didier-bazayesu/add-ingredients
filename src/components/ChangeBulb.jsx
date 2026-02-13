
import { useState ,useEffect} from 'react'
import icon8 from '../assets/icon8.png'
import iconOn from '../assets/on.png'

function ChangeBulb() {
    const[isOn , setIsOn] =  useState(false);
    const[lightChange , setChange] = useState("OFF");
    useEffect(()=>{
         setChange(isOn ? "ON" : "OFF");
    },[isOn])


  function changeBulbState(){
    
         setIsOn(change=> !change);
  }
  return (
    <div>
      <img src={isOn ? iconOn :icon8} alt=""  
        className={`w-24 transition-all duration-500 ${isOn ? "filter brightness-200 bg-amber-500" : "filter brightness-50"
          }`}
        />
        <button onClick={changeBulbState} className='font-bold cursor-pointer
        '>{lightChange}</button>
        

    </div>
       
    
  )
}

export default ChangeBulb