import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react'
import img1 from '../containers/images/imgr.jpg';
import recipeContext from '../context/recipes/recipeContext';
import Nutritioninfo from './Nutritioninfo';

// import { useContext,useEffect } from 'react';
// import recipeContext from '../context/recipes/recipeContext';
export default function ViewRecipe(props) {
    const context = useContext(recipeContext);
    const { saveRecipeid, } = context;
    const host = "http://localhost:3005"
    const id = localStorage.getItem('RecipeId');
    const [recipe, setrecipe] = useState([]);
    const [step, setstep] = useState([]);
    const [ingrident, setingrident] = useState([]);
    const [nutrition, setnutrition] = useState([]);
    const getrecipe = async () => {
        // const res1=await axios.get(`https://api.spoonacular.com/recipes/guessNutrition?title=egg&apiKey=4e41e0ba54e647d89fc0dd40d503edef`)
        const res = await axios.get(`${host}/api/recipes/${id}`)
        // setnutrition(res1.data);
        setrecipe(res.data);
        setstep(res.data.steps1);
        setingrident(res.data.ingridentarray)
    }
    useEffect(() => {

        getrecipe();



        //        const getnutrition=async()=>{
        //      const res=await axios.get(`https://api.spoonacular.com/recipes/guessNutrition?title=egg&apiKey=4e41e0ba54e647d89fc0dd40d503edef`)
        // setnutrition(res.data);

        //        }

    }, []);
    function getnutrition() {
        fetch(`https://api.spoonacular.com/recipes/guessNutrition?title=egg&apiKey=84455ff37c3347b89d91dd02b48c99ed`)
            .then((response) => response.json())
            .then((data) => {
                setnutrition(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            })
    }
    // const fat=nutrition.fat.value +nutrition.fat.unit;
    // console.log(fat);
    const Steps = step.map((dir, i) => {
        return (
            <div key={Math.random()} className="single-preparation-step d-flex my-2 p-2">
                <h4 className='text-warning '>0{i + 1}</h4>
                <p className='p-2'>{dir.steps} </p>
            </div>
        );
    });

    const ingrident1 = ingrident.map((ingri, i) => {
        return (
            <div key={Math.random()} className="custom-control custom-checkbox my-2 p-2 ">
                <div className="row">
                    <div className="col-2">

                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                    <div className="col-10">
                        <label className="custom-control-label" htmlFor="customCheck1" style={{ "marginLeft": 11 + "px" }}>{ingri.ingridentName}</label>

                    </div>

                </div>
            </div>
        );
    });
    // console.log(nutrition);
    console.log(recipe);
    return (
        <>
            {/* <h1>hello</h1> */}


            <div className="container">
                <div className="row h-50">
                    <img src="https://source.unsplash.com/random/900×700/?recipe" alt="..." style={{ "height": 372 + "px" }} />
                </div>
                <div className="row border border-info  border-2 my-5 bg-dark bg-gradient text-white">
                    <div className="col-12 col-md-8">
                        <div className="receipe-headline my-5">
                            {/* <span>April 05, 2018</span> */}
                            <h2 className='text-info '>{recipe.title}</h2>
                            <div className="d-flex flex-column  my-3">
                                <h6>Prep: {recipe.cooktimed} mins</h6>
                                <h6>Cook: 30 mins</h6>
                                <h6>Yields: 8 Servings</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="receipe-headline my-5">
                            {/* <span>April 05, 2018</span> */}
                            <button onClick={getnutrition}> <h2 className='text-info '>Nutrition Info</h2></button>
                            {/* {nutrition && <Nutritioninfo nutritiondata={nutrition} />} */}
                            {/* <h2 className='text-info '>Nutrition Info</h2> */}
                            {/* <div className="d-flex flex-column  my-3">
                                <h6>Serves : 4</h6>
                                <h6>Total Fat :{nutrition.fat.value} {nutrition.fat.unit} </h6>
                                <h6>protien : {nutrition.protein.value} {nutrition.protein.unit}</h6>
                                <h6>Chalories: {nutrition.calories.value} {nutrition.calories.unit}</h6>

                            </div> */}

                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 my-3 border border-2 border-info col-lg-8 bg-dark bg-gradient text-white">
                        <h2 className="my-3 text-info">Direction</h2>

                        {Steps}

                    </div>

                    {/* <!-- Ingredients --> */}
                    <div className="col-12 col-lg-4 my-3 ">
                        <div className="container border border-2 border-info bg-dark bg-gradient text-white">
                            <h2 className="my-3 text-info">Ingredients</h2>


                            {ingrident1}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
