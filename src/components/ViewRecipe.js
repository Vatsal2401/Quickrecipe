import axios from 'axios';
import React, {useState, useContext ,useEffect} from 'react'
import img1 from '../containers/images/imgr.jpg';
import recipeContext from '../context/recipes/recipeContext';

// import { useContext,useEffect } from 'react';
// import recipeContext from '../context/recipes/recipeContext';
export default function ViewRecipe(props) {
   const context= useContext(recipeContext);
   const {saveRecipeid}=context;
   const host = "http://localhost:3005"
   const id=localStorage.getItem('RecipeId');
    const [recipe, setrecipe] = useState({});
useEffect(() =>
 {
     const getrecipe=async()=>{
         const res =await  axios.get(`${host}/api/recipes/${id}`)
         setrecipe(res.data);
     }
   
  
    getrecipe();
}, []);


  return (
    <>
      {/* <h1>hello</h1> */}

      
      <div className="container">
        <div className="row h-50">
          <img src="https://source.unsplash.com/random/900×700/?recipe" alt="..." style={{"height":372+"px"}}/>
        </div>
      <div className="row border border-info  border-2 my-5 bg-dark bg-gradient text-white">
                    <div className="col-12 col-md-8">
                        <div className="receipe-headline my-5">
                            {/* <span>April 05, 2018</span> */}
                            <h2 className='text-info '>{recipe.title}</h2>
                            <div className="d-flex flex-column  my-3">
                                <h6>Prep: 15 mins</h6>
                                <h6>Cook: 30 mins</h6>
                                <h6>Yields: 8 Servings</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="receipe-headline my-5">
                            {/* <span>April 05, 2018</span> */}
                            <h2 className='text-info '>Nutrition Info</h2>
                            <div className="d-flex flex-column  my-3">
                            <h6>Serves : 4</h6>
                                <h6>Total Fat : 20.4g</h6>
                                <h6>Cholesterol : 2%</h6>
                                <h6>Chalories: 345</h6>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-12 my-3 border border-2 border-info col-lg-8 bg-dark bg-gradient text-white">
                    <h2 className="my-3 text-info">Direction</h2>
                        {/* <!-- Single Preparation Step --> */}
                        <div className="single-preparation-step d-flex my-2 p-2 ">
                            <h4 className='text-warning '>01.</h4>
                            <p  className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                        {/* <!-- Single Preparation Step --> */}
                        <div className="single-preparation-step d-flex my-2 p-2">
                            <h4 className='text-warning ' >02.</h4>
                            <p  className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                        {/* <!-- Single Preparation Step --> */}
                        <div className="single-preparation-step d-flex my-2 p-2">
                            <h4 className='text-warning '>03.</h4>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                        {/* <!-- Single Preparation Step --> */}
                        <div className="single-preparation-step d-flex my-2 p-2">
                            <h4 className='text-warning '>04.</h4>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                    </div>

                    {/* <!-- Ingredients --> */}
                    <div className="col-12 col-lg-4 my-3 ">
                        <div className="container border border-2 border-info bg-dark bg-gradient text-white">
                            <h2 className="my-3 text-info">Ingredients</h2>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2 ">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1" style={{"marginLeft":11+"px"}}>4 Tbsp (57 gr) butter</label>
                            </div>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                <label className="custom-control-label" htmlFor="customCheck2" style={{"marginLeft":11+"px"}}>2 large eggs</label>
                            </div>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                <label className="custom-control-label" htmlFor="customCheck3" style={{"marginLeft":11+"px"}}>2 yogurt containers granulated sugar</label>
                            </div>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                <label className="custom-control-label" htmlFor="customCheck4" style={{"marginLeft":11+"px"}}>1 vanilla or plain yogurt, 170g container</label>
                            </div>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                <label className="custom-control-label" htmlFor="customCheck5" style={{"marginLeft":11+"px"}}>2 yogurt containers unbleached white flour</label>
                            </div>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                <label className="custom-control-label" htmlFor="customCheck6" style={{"marginLeft":11+"px"}}>1.5 yogurt containers milk</label>
                            </div>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                                <label className="custom-control-label" htmlFor="customCheck7" style={{"marginLeft":11+"px"}}>1/4 tsp cinnamon</label>
                            </div>

                            {/* <!-- Custom Checkbox --> */}
                            <div className="custom-control custom-checkbox my-2 p-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck8"/>
                                <label className="custom-control-label" htmlFor="customCheck8" style={{"marginLeft":11+"px"}}>1 cup fresh blueberries </label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </>
  )
}
