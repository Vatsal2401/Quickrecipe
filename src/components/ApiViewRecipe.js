import axios from 'axios';
import React, { useState,  useEffect, useRef } from 'react'
// import recipeContext from '../context/recipes/recipeContext';
import {Buffer} from 'buffer';
// import parse from 'html-react-parser';
export default function ApiViewRecipe(props) {
    // const context = useContext(recipeContext);
    const id = localStorage.getItem('ApiRecipeId');
    const [Apirecipe, setApirecipe] = useState([]);
    const [step, setstep] = useState([]);
    const [Apiingrident, setApiingrident] = useState([]);
    const [Nutritionlabel, setNutritionlabel] = useState(null);
    const [Nutritioninfo, setNutritioninfo] = useState(null);
    // const [nutrition, setnutrition] = useState(null)
    // const [nutritioninfo, setnutritioninfo] = useState(null)
    const getApirecipe = async () => {
        const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=9c11fe31a36f42cfbc1a4e534cce9cf1`)
        setApirecipe(res.data);
        setstep(res.data.analyzedInstructions[0].steps);
        setApiingrident(res.data.extendedIngredients);
        setNutritioninfo(res.data.nutrition.nutrients);
    }
    useEffect(() => {
        
        getApirecipe();
        
    }, []);
    const Steps = step.map((dir, i) => {
        return (
            <div key={Math.random()} className="single-preparation-step d-flex my-2 p-2">
                <h4 className='text-warning '>0{i + 1}</h4>
                <p className='p-2'>{dir.step} </p>
            </div>
        );
    });
    const ref = useRef(null);
    // const refclose=useRef(null);
    const getNutritiondata = async () => {
        ref.current.click();
        const res1 = await axios.get(`https://api.spoonacular.com/recipes/${id}/nutritionLabel.png?includeNutrition=false&apiKey=9c11fe31a36f42cfbc1a4e534cce9cf1`,{ responseType: 'arraybuffer' })
        let base64ImageString = Buffer.from(res1.data, 'binary').toString('base64');
        let srcValue = "data:image/png;base64,"+base64ImageString
        setNutritionlabel(srcValue);
    }
    const ingrident1 = Apiingrident.map((ingri, i) => {
        return (
            <div key={Math.random()} className="custom-control custom-checkbox my-2 p-2 ">
                <div className="row">
                    <div className="col-2">

                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                    <div className="col-8">
                        <label className="custom-control-label" htmlFor="customCheck1" style={{ "marginLeft": 11 + "px" }}>{ingri.original}</label>

                    </div>
                    <div className="col-2">

                        
                    </div>
                </div>
            </div>
        );
    });
    // console.log(Apirecipe);
    // console.log(Nutritionlabel);
    const x=Nutritioninfo;
    // console.log(x[0])
    console.log("cal")
  console.log();
    return (
        <>


            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen-sm-down">
                    <div className="modal-content">
                    <div className="modal-header row">
                            <div className="col-md-2 ">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  ></button>
                            </div>
                        </div>
                        <div className="modal-header row">
                            <div className="col-md-10 d-grid justify-content-center">
                                <h5 className="modal-title ms-2 " id="exampleModalLabel"> Nutrition Facts Label</h5>
                            </div>
                            {/* <div className="col-md-2 ">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  ></button>
                            </div> */}
                        </div>
                                                {/* {(nutritioninfo) ? <div className="modal-body ">
                            <h6>Fat :{nutritioninfo.fat.value} {nutritioninfo.fat.unit} </h6>
                            <h6>Protien : {nutritioninfo.protein.value} {nutritioninfo.protein.unit}</h6>
                            <h6>Chalories: {nutritioninfo.calories.value} {nutritioninfo.calories.unit}</h6>
                        </div> : <div></div>} */}
                          <h5 className="modal-title d-flex justify-content-center" id="exampleModalLabel">{Apirecipe.title}</h5>
                        <img src={Nutritionlabel}  className="mx-5 my-3"alt="" />
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal"  >Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* <div className="row  "> */}
                {/* <img src={`http://localhost:3005/RecipeImage/${recipe.recipeimage}`} alt="..." style={{ "height": 372 + "px" }} /> */}

                <div className="row">
                    <div className="col-md-8 d-flex justify-content-center"><img src={Apirecipe.image} className="rounded mx-auto d-block" alt="..." /></div>
               
                    <div className="col-md-4">  <div className="container border border-2 border-info bg-dark bg-gradient text-white">
                            <h2 className="my-3 text-info">Nutrition Information</h2>

                        {  (Nutritioninfo) ? <div> <h6>Fat :{Nutritioninfo[1].amount} {Nutritioninfo[1].unit} </h6>
                            <h6>Protien : {Nutritioninfo[8].amount} {Nutritioninfo[8].unit}</h6>
                            <h6>Chalories: {Nutritioninfo[0].amount} {Nutritioninfo[0].unit}</h6>
                            <h6>Sugar: {Nutritioninfo[5].amount} {Nutritioninfo[5].unit}</h6>
                            <h6>Carbohydrates: {Nutritioninfo[3].amount} {Nutritioninfo[3].unit}</h6> </div>  : <div></div>}
                            {/* {ingrident1} */}
                        </div> </div>
                    {/* <div className="col-md-4"></div> */}
                </div>
                {/* </div> */}
                <div className="row border border-info  border-2 my-5 bg-dark bg-gradient text-white">
                    <div className="col-12 col-md-8">
                        <div className="receipe-headline my-5">


                            <h2 className='text-info '>{Apirecipe.title}</h2>
                            <div className="d-flex flex-column  my-3">
                                {/* <h6>Prep: {recipe.cooktimed} mins</h6> */}
                                <h6>Cook Time: {Apirecipe.readyInMinutes} mins</h6>
                                <h6>Yields:{Apirecipe.servings} serving</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="receipe-headline my-5">

                            {/* <Nutritioninfo parseingrident={ingrident} /> */}
                            <i className="fa-brands fa-get-pocket" onClick={() => getNutritiondata()}></i>

                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 my-3 border border-2 border-info col-lg-8 bg-dark bg-gradient text-white">
                        <h2 className="my-3 text-info">Direction</h2>
                        {Steps}

                    </div>


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
