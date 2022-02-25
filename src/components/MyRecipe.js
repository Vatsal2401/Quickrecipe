import React, { useContext ,useEffect} from 'react';
// import RecipeItem from './RecipeItem';
// import img from '../containers/images/imgr.jpg';
import recipeContext from '../context/recipes/recipeContext';
// import RecipeState from '../context/recipes/RecipeState';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
export default function
  (props) {

  const context = useContext(recipeContext);
  let history=useHistory();
  const { saveRecipeid,recipes,deleteRecipe,getrecipes } = context;
  
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getrecipes();
    }
  else{
history.push("/Login")
  }
  //eslint-disable-next-line
    }, [])
  console.log("hii")
  console.log(recipes._id);
  console.log("hiii");
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
          <i className="fa-solid fa-trash-can mx-1 " onClick={()=>{deleteRecipe(recipes._id); props.showAlert("Recipe Deleted Succesfully","success");}}></i>
            <i className="fa-solid fa-pen-to-square mx-2 "></i>
            </div>
            <Link type="button" to= "/ViewRecipe/123"className="btn btn-outline-dark">View Recipe</Link>
        </div>
    
      </div>
    })}
  </div>;
}
