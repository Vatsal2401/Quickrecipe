import React from 'react';
import RecipeItem from './RecipeItem';
import img from '../containers/images/imgr.jpg';
import img1 from '../containers/images/img1.jpg';
export default function 
() {
    const Description="This is a specific formula for achieving a perfectly pink prime rib cooked somewhere a shade under medium rare."
  return <div>
       <div className='container my-3'>
        {/* <h1>images</h1> */}
        {/* <img src={img} className="img-fluid" alt="img"></img> */}
        {/* <img src={img} className="rounded float-start" alt="..."></img> */}
        <div className="row">
          <div className="col-md-6">
          <RecipeItem RecipeTitle="Title Of  Recipe" RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe"/>
          </div>
          <div className="col-md-6">
          <RecipeItem RecipeTitle="Title Of  Recipe" RecipeDescription={Description} imgurl={img1} DetailsRecipeUrl="./ViewRecipe"/>
          </div>
          <div className="col-md-6">
          <RecipeItem RecipeTitle="Title Of  Recipe" RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe"/>
          </div>
          <div className="col-md-6">
          <RecipeItem RecipeTitle="Title Of  Recipe" RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe"/>
          </div>
          <div className="col-md-6">
          <RecipeItem RecipeTitle="Title Of  Recipe" RecipeDescription={Description}imgurl={img} DetailsRecipeUrl="./ViewRecipe"/>
          </div>
          <div className="col-md-6">
          <RecipeItem RecipeTitle="Title Of  Recipe" RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe"/>
          </div>


        </div>

        

      </div>
  </div>;
}
