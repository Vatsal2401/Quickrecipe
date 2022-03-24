import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function RecipeItemList () {
  const [apirecipe, setapirecipe] = useState([]);
  const getrecipe = async () => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&tags=vegan
      &apiKey=e1c5fcf68c3a4f03a45ea96c7bde9c21`)
    setapirecipe(res.data.recipes);
  }

  useEffect(() => {
    getrecipe();

  }, []);
 
  const saveApiRecipeid = (x) => {
    localStorage.setItem("ApiRecipeId", x);
  }
  console.log(apirecipe);
  const recipes = apirecipe.map((recipe) => {
    return (
      <div key={Math.random()} className="card mb-3 col-md-6 mx-2 " style={{ "maxWidth": "540px","backgroundColor":"#e4bca0" }}>
        <div className="row g-0">
          <div className="col-md-4 my-1">
            <img src={recipe.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <Link type="button" to="/ApiViewRecipe" className="btn btn-outline-dark" onClick={() => { saveApiRecipeid(recipe.id) }}>View Recipe</Link>
              {/* <p className="card-text">{recipe.summary}</p> */}
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
      // <div key={Math.random()} className="col-md-6">
      // <RecipeItem RecipeTitle="Title Of  Recipe" RecipeDescription={Description} imgurl={recipe.image} DetailsRecipeUrl="./ViewRecipe" />
      // </div>
    );
  });
  return <div className=" row my-3 " style={{ "margin-left": "14rem" }}>
    {/* <div className=' container '> */}
    {(apirecipe === []) ? <div></div> : recipes}
    {/* </div> */}

  </div>;
}
