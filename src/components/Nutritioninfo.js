import React from 'react'
import axios from 'axios';
import  { useState,useEffect } from 'react'

export default function Nutritioninfo({nutritiondata}) {
//     const [nutrition, setnutrition] = useState([]);
//     const getnutrition=async()=>{
// const res=await axios.get(`https://api.spoonacular.com/recipes/guessNutrition?title=egg&apiKey=84455ff37c3347b89d91dd02b48c99ed`)
//      setnutrition(res.data);

// }
   
    
// // function getnutrition() {
// //     fetch(`https://api.spoonacular.com/recipes/guessNutrition?title=egg&apiKey=84455ff37c3347b89d91dd02b48c99ed`)
// //     .then((response)=>response.json())
// //     .then((data)=>{
// //         setnutrition(data);
// //     })
// //     .catch(()=>{
// //         console.log("error");
// //     })
// // }
// useEffect(() => {
       
//     getnutrition();



// }, []);
// console.log(nutrition);
  return (
    <div className="d-flex flex-column  my-3">
        {/* <button >Get</button> */}
                                <h6>Serves : 4</h6>
                                <h6>Total Fat :{nutritiondata.fat.value} {nutritiondata.fat.unit} </h6>
                                <h6>protien : {nutritiondata.protein.value} {nutritiondata.protein.unit}</h6>
                                <h6>Chalories: {nutritiondata.calories.value} {nutritiondata.calories.unit}</h6>

                            </div>
  )
}
