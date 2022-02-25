import React, { useEffect, useState } from 'react';
// import RecipeItemList from './RecipeItemList';
import img from '../containers/images/imgr.jpg';
import img1 from '../containers/images/img1.jpg';
import RecipeItem from './RecipeItem';

export default function
  (props) {
  const [favourite, setfavourite] = useState([])
  const [frecipe, setfrecipe] = useState([])
  const host = "http://localhost:3005"
  const Description = "This is a specific formula for achieving a perfectly pink prime rib cooked somewhere a shade under medium rare."
  const getfavouriterecipes = async () => {
    //TODO API
    const response = await fetch(`${host}/api/recipes/getfavourite`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('token')
      }
    });
    const json = await response.json()
    // console.log(json)
    const a = () => {
      json.map((item) => {
        // const recipeid=item.favouriterecipe[0].recipe;
        // console.log(recipeid)
        setfavourite(item.favouriterecipe);
        
      });
    }
    a();
  }
  useEffect(() => {
    getfavouriterecipes();
  }, [])
  console.log(favourite);

//  const recipeid=favourite[0].recipe;
  return <div>{favourite.map((f)=>{
    return  <RecipeItem RecipeTitle="FavouriteRecipe" key={Math.random()} recipeid={f.recipe} showAlert={props.showAlert} RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe" />
  })
  // <div>
  //   <RecipeItem RecipeTitle="FavouriteRecipe"  RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe" />
  //   <RecipeItem RecipeTitle="FavouriteRecipe" RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe" />
  //   <RecipeItem RecipeTitle="FavouriteRecipe" RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe" />
  //   <RecipeItem RecipeTitle="FavouriteRecipe" RecipeDescription={Description} imgurl={img} DetailsRecipeUrl="./ViewRecipe" />
  // </div>

}
  </div> ;
 
}
