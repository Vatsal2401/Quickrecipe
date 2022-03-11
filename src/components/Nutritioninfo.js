import React from 'react'
import axios from 'axios';
import  { useState,useEffect } from 'react'

export default function Nutritioninfo(props) {
    const [nutrition, setnutrition] = useState(null);
    const getnutrition=async()=>{
const res=await axios.get(`https://api.spoonacular.com/recipes/guessNutrition?title=red chilli&apiKey=9c11fe31a36f42cfbc1a4e534cce9cf1`)
     setnutrition(res.data);

}
   
useEffect(() => {
       
    getnutrition();



}, []);
console.log(nutrition);
console.log(props.parseingrident);
  return (<>
   <h2 className='text-info '>Nutrition Info</h2>
  {(nutrition)?  <div className="d-flex flex-column  my-3">
        {/* <button >Get</button> */}
                                <h6>Serves : 4</h6>
                                <h6>Total Fat :{nutrition.fat.value} {nutrition.fat.unit} </h6>
                                <h6>protien : {nutrition.protein.value} {nutrition.protein.unit}</h6>
                                <h6>Chalories: {nutrition.calories.value} {nutrition.calories.unit}</h6>

                            </div>:<div></div>}
  
                            </>
  )
}
