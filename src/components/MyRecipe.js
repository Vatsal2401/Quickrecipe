import React, { useContext, useEffect } from 'react';
import recipeContext from '../context/recipes/recipeContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
export default function
  (props) {
 

  const context = useContext(recipeContext);
  let history = useHistory();
  const { recipes, deleteRecipe, getrecipes } = context;
  const saveRecipeid = (x) => {
    localStorage.setItem("RecipeId", x);
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getrecipes();
    }
    else {
      history.push("/Login")
    }
    //eslint-disable-next-line
  }, [])

  return <div>

    {recipes.map((recipes) => {

      return <div key={recipes._id} style={{ "backgroundColor": "#56d8e83d" }} >
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col-md-8 p-4  ">
            <div className="  flex-column position-static d-flex">


              <h4 className="mb-0">{recipes.title}</h4>

              <p className="card-text mb-auto">{recipes.description}</p>
            </div>


          </div>
          <div className="col-md-4">

            <img src={`http://localhost:3005/RecipeImage/${recipes.recipeimage}`} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="d-flex align-items-end my-2">
            <i className="fa-solid fa-trash-can mx-1 " onClick={() => { deleteRecipe(recipes._id); props.showAlert("Recipe Deleted Succesfully", "success"); }}></i>
            <i className="fa-solid fa-pen-to-square mx-2 "></i>
          </div>
          <Link type="button" to="/ViewRecipe" className="btn btn-outline-dark" onClick={()=>{saveRecipeid(recipes._id)}}> View Recipe</Link>
        </div>

      </div>
    })}
  </div>;
}
