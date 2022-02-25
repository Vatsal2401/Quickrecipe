
import RecipeContext from "./recipeContext";
import { useEffect, useState } from "react";

const RecipeState = (props) => {
  const host = "http://localhost:3005"
  const recipesIntial = []
  const [recipes, setRecipes] = useState(recipesIntial);
  const [Search, setSearch] = useState("Search")
  const [SearchRecipe, SetSearchRecipe] = useState([]);


  const getsearchrecipes = async () => {
    const response = await fetch(`${host}/api/homerecipes/searchrecipes?title=${Search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'authtoken': localStorage.getItem('token')
      }

    });
    const json = await response.json()
    console.log(json)
    SetSearchRecipe(json)
  }
  useEffect(() => {
    getsearchrecipes()
  }, [])
  const handlechange = (e) => {
    setSearch(e.target.value)
  }
  const onSearch = () => {
    getsearchrecipes()
  }
  //get all recipes
  const getrecipes = async () => {
    //TODO API
    const response = await fetch(`${host}/api/recipes/fetchallrecipes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('token')
      }
    });
    const json = await response.json()
    console.log(json)
    setRecipes(json)
  }
  //create recipe
  const createRecipe = async (title, description, recipeimage, cooktime, serves, props) => {
    //TODO API
    const formData = new FormData();


    formData.append('title', title);
    formData.append('description', description);
    formData.append('recipeimage', recipeimage);
    formData.append('cooktime', cooktime);
    formData.append('serves', serves);
    const response = await fetch(`${host}/api/recipes/addrecipes`, {
      method: 'POST',
      headers: {

        'authtoken': localStorage.getItem('token')
      },

      body: formData
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {

      props.showAlert("Recipe Created Successfully", "success")

    }
    else {
      props.showAlert("Invalid Details", "danger")
    }


    const recipe = {
      "_id": "62102098e669ecdd6d1435b0a",
      "user": "61fcb48ce628f858a68a5d62",
      "recipeimage": recipeimage,
      "title": title,
      "description": description,
      "cooktime": 5,
      "serves": 4,
      "date": "2022-02-08T06:11:26.923Z",
      "__v": 0
    }
    setRecipes(recipes.concat(recipe))
  }
  //delete recipe

  const deleteRecipe = async (id) => {
    //todo api call
    const response = await fetch(`${host}/api/recipes/deleterecipe/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('token')
      },


    });
    const json = await response.json()
    console.log(json)
    console.log("deleting not ", id)
    const newrecipe = recipes.filter((recipe) => { return recipe._id !== id })
    setRecipes(newrecipe)
  }
  //edit recipe

  const editRecipe = async (id, title, description) => {



    const response = await fetch(`${host}/api/recipes/updaterecipe/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('token')
      },

      body: JSON.stringify({ title, description })
    });
    const json = response.json();

    for (let index = 0; index < recipes.length; index++) {
      const element = recipes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
      }
    }
  }


  //set favouriterecipes
  const favouriteRecipe = async (recipe, recipeuser) => {



    const response = await fetch(`${host}/api/recipes/updatefavourite`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('token')
      },

      body: JSON.stringify({ recipe, recipeuser })
    });
    const json = response.json();
  }
  //delete favouriterecipes
  const deletefavouriteRecipe = async (recipe, recipeuser) => {



    const response = await fetch(`${host}/api/recipes/deletefrecipe`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('token')
      },

      body: JSON.stringify({ recipe, recipeuser })
    });
    const json = response.json();
  }
  const [HomeRecipes, setHomeRecipes] = useState([])
  //Fetch all homerecipes
  const gethomerecipes = async () => {
    //TODO API
    const response = await fetch(`${host}/api/homerecipes/fetchrecipes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      }
    });
    const json = await response.json()
    // console.log(json)
    setHomeRecipes(json);
  }


  return (<RecipeContext.Provider value={{deletefavouriteRecipe, favouriteRecipe, recipes, createRecipe, deleteRecipe, editRecipe, getrecipes, Search, setSearch, handlechange, getsearchrecipes, SearchRecipe, onSearch, HomeRecipes, setHomeRecipes, gethomerecipes }}>
    {props.children}
  </RecipeContext.Provider>)


}


export default RecipeState