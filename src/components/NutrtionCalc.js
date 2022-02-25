import { useState } from "react";
import React from 'react'
import './Nutrition.css'

export default function NutritionC() {
    const[text, setText] = useState("Enter Recipe Ingridents");
    const handleUperClick=() =>{
        // console.log("click kiya");
     let newtext=  text.toUpperCase(); 
     setText(newtext);
    }
    const handleOnchange=(event)=>{
// console.log("change kiya");
     setText(event.target.value);

    }
    return (
        <>
        <form action="">
        <div className="container myContainer1">
            <h1>Nutrition Calculator</h1>
        </div>
        
        <div className="container my-4 border border-dark">
            <h3>Enter  Recipe Name(optional)</h3>
            <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="Enter a Recipe Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <h3>Enter Recipe Ingridents</h3>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>

            </div>
            <div className="row g-2">
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option className="selected"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Select a No Of Serving</label>
                    </div>
                </div>

            </div>
            <div className="my-3">
            <div className="d-grid  col-3 mx-auto my-3 ">
                <button className="btn btn-secondary my-3" type="button" onClick={handleUperClick}>Analyze Recipe</button>
                 </div>
                 </div>
                 </div>
                 </form>
                 </>
        )
}
