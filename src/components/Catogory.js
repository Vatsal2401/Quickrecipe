import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import recipeContext from '../context/recipes/recipeContext';
import CatogoryItem from './CatogoryItem';
import Spinner from './Spinner';

export default function Catogory(props) {




  const context = useContext(recipeContext);

  const { gethomerecipes, HomeRecipes, setHomeRecipes, favouriteRecipe } = context;
  const saveRecipeid = (x) => {
    localStorage.setItem("RecipeId", x);
  }

  useEffect(() => {
    gethomerecipes();
    //eslint-disable-next-line
  }, [])
  console.log("Home recipes")
  console.log(HomeRecipes)

  const HomeRecipes1 = HomeRecipes;

  const allcatValues = [...new Set(HomeRecipes1.map((curElem) => {
    return curElem.catogory;
  })), "all"]
  console.log(allcatValues);
  const [catogoryrecipe, setcatogoryrecipe] = useState([])
  const [catItems, setcatItems] = useState(allcatValues)


  const filterItem = (categItem) => {
    if (categItem === "all") {
      setcatogoryrecipe(HomeRecipes1);
      return;
    }
    const updatedItems = HomeRecipes1.filter((curElem) => {
      return curElem.catogory === categItem;
    })
    setcatogoryrecipe(updatedItems);
  }
  return <>

    <h1 className="mt-1 text-center main-heading">Category</h1>
    <Spinner />
    <div className="menu-tabs container">
      <div className="menu-tab d-flex justify-content-around">
        {
          allcatValues.map((curElem, i) => {
            return <button className="btn  btn-outline-dark" key={i} onClick={() => { filterItem(curElem) }}>{curElem}</button>
          })
        }

      </div>
    </div>
    {/* recipe item */}

    <div className="container my-5">
      {catogoryrecipe.map((recipes) => {

        return <div key={recipes._id} style={{ "backgroundColor": "#56d8e83d" }} >
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-md-8 p-4  ">
              <div className="  flex-column position-static d-flex">


                <h4 className="mb-0">{recipes.title}</h4>

                <p className="card-text mb-auto my-4">Description : {recipes.description}</p>
                <h6 className='mb-0 my-3'>Catogory : {recipes.catogory}</h6>
              </div>


            </div>
            <div className="col-md-4">

              <img src={`http://localhost:3005/RecipeImage/${recipes.recipeimage}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="d-flex align-items-end my-2">
              {/* <i className="fa-solid fa-trash-can mx-1 " onClick={()=>{deleteRecipe(recipes._id); props.showAlert("Recipe Deleted Succesfully","success");}}></i> */}
              <i className="fa-regular fa-bookmark mx-2" onClick={() => { favouriteRecipe(recipes._id, recipes.user); props.showAlert("Recipe Added Succesfully", "success"); }}></i>
            </div>
            <Link type="button" to="/ViewRecipe" className="btn btn-outline-dark" onClick={()=>{saveRecipeid(recipes._id)}}>View Recipe</Link>
          </div>

        </div>
      })}
    </div>


  </>;

}
