import axios from 'axios'
import React, {useContext, useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import recipeContext from '../context/recipes/recipeContext';

export default function RecipeItem(props) {
  const context = useContext(recipeContext);
 
  const {saveRecipeid,deletefavouriteRecipe} = context;
  const host = "http://localhost:3005"
  const [frecipe, setfrecipe] = useState([])

useEffect(() => {
  axios.get(`${host}/api/recipes/${props.recipeid}`)
  .then(res=>{
    setfrecipe(res.data);
    // console.log(res);
  })
},[])
console.log(frecipe)
return <><div  style={{ "backgroundColor": "#56d8e83d" }} >
<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div className="col-md-8 p-4  ">
   <div className="  flex-column position-static d-flex">

    
    <h4 className="mb-0">{frecipe.title}</h4>
    
    <p className="card-text mb-auto">{frecipe.description}</p>
   </div>
 
   
  </div>
  <div className="col-md-4">
    
    <img src={`http://localhost:3005/RecipeImage/${frecipe.recipeimage}`} className="img-fluid rounded-start" alt="..." />
  </div>
  <div className="d-flex align-items-end my-2"> 
  {/* <i className="fa-solid fa-trash-can mx-1 " onClick={()=>{deleteRecipe(frecipe._id); props.showAlert("Recipe Deleted Succesfully","success");}}></i> */}
    <i className="fa-solid fa-trash-can mx-2 " onClick={()=>{deletefavouriteRecipe(frecipe._id,frecipe.user);props.showAlert("Recipe Removed Succesfully","success");window.location.reload();}}></i>
    </div>
    <Link type="button" to= "/ViewRecipe/123"className="btn btn-outline-dark">View Recipe</Link>
</div>

</div></>;
}
