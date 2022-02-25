import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import recipeContext from '../context/recipes/recipeContext';

export default function SearchRecipe(props) {

  const context = useContext(recipeContext);
 
  const {saveRecipeid, Search,SetSearch,handlechange,SearchRecipe,onSearch,favouriteRecipe} = context;

  return (
    <>
    <div className="sticky-top">
      <nav className="navbar navbar-light bg-light ">

        <div className=" container-fluid justify-content-center my-2">
          <div className="d-flex">
            <input className="form-control me-2 text-center"  placeholder="Search Recipes" name='search' value={Search} onChange={handlechange}/>
            <button className="btn btn-info " onClick={onSearch}>Search </button>
          </div>


        </div>
      </nav>
    </div>
   <div className="container">
    {SearchRecipe.map((recipes) => {

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
    {/* <i className="fa-solid fa-trash-can mx-1 " onClick={()=>{deleteRecipe(recipes._id); props.showAlert("Recipe Deleted Succesfully","success");}}></i> */}
      <i className="fa-regular fa-bookmark mx-2 "onClick={()=>{favouriteRecipe(recipes._id,recipes.user);props.showAlert("Recipe Added Succesfully","success");}}></i>
      </div>
      <Link type="button" to= "/ViewRecipe/123"className="btn btn-outline-dark">View Recipe</Link>
  </div>

</div>
})}
</div>
 </>
  )
}
