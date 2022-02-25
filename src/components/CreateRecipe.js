import React, { useState, useContext } from 'react'
import recipeContext from '../context/recipes/recipeContext';
import './createrecipe.css'
import Inputfield from './Inputfield';
import StepInputField from './StepInputField';
// import './createrecipe.js'

export default function CreateRecipe(props) {

  const context = useContext(recipeContext)
  const { createRecipe } = context;
  const [recipes, setRecipes] = useState({
    recipeimage: "",
    title: "",
    serves: "",
    cooktime: "",
    description: "",
    ingridentlist: [{ index: Math.random(), ingridentName: "" }],
    
  });
const [steprecipe, setSteprecipe] = useState([{steps:""}])
  const handlechange = (e) => {
    console.log(e.target.name)
    if (["ingridentName"].includes(e.target.name)) {
      let ingridentlist =[...recipes.ingridentlist]
      ingridentlist[e.target.dataset.id][e.target.name]=e.target.value;
    }
   
    else{
    setRecipes({ ...recipes, [e.target.name]: e.target.value })}
  }
  const handlechange1 = (i,e) => {
    console.log(e.target.name)
   
      let steps1 =[...steprecipe]
      steps1[i][e.target.name]=e.target.value;
      setSteprecipe(steps1);
  }
 
  const imageUpload = (event) => {
    console.log(event.target.files[0])
    setRecipes({ ...recipes, recipeimage: event.target.files[0] })
  }
  const handleclick = (e) => {
    e.preventDefault();
    createRecipe(recipes.title, recipes.description, recipes.recipeimage, recipes.cooktime, recipes.serves, props)

  }
  const addclick = () => {
    console.log("add kiya")
    setRecipes((preRecipe) => ({
      ingridentlist: [...preRecipe.ingridentlist, { index: Math.random(), ingridentName: "" }]
    }));
  }
  const deleteclick = (record) => {

    setRecipes({

      ingridentlist: recipes.ingridentlist.filter(r => r !== record)
    })
  }
  const addclickst = () => {
    console.log("add kiya")
    setSteprecipe([...steprecipe,{steps:""}]);
  }
  const deleteclickst = (i) => {
   let newStep=[...steprecipe];
   newStep.splice(i,1)
    setSteprecipe(newStep)
  }
  // const deleteRow=(index)=>{
  //   setRecipes({
  //     ingridentlist:recipes.ingridentlist.filter((s,sindex)=>index !== sindex)
  //   })
  // }
  let { ingridentlist } = recipes;
  let {steps}=steprecipe;
  return (
    <>
      <form action="" >
        <div className="container my-5 border w-50 ">
          <div className="container d-flex justify-content-center my-3">
            <h1>
              Create Recipe
            </h1>
          </div>
          <div className="container my-6">
            <div className="row my-3">
              <div className="col border">
                <div className="container ">
                  display image
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Upload Recipe Image</label>
                  <input className="form-control" type="file" id="formFile" name="recipeimage" onChange={imageUpload} />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="Title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="Title" name="title" value={recipes.title} onChange={handlechange} />
              </div>
            </div>
            <div className=" contaner row mb-3">

              <label htmlFor="inputCookTime" className="col-lg-2 col-form-label">CookTime</label>
              <div className="col">
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputCookTime" name="cooktime" value={recipes.cooktime} onChange={handlechange} />
                </div></div>
              <label htmlFor="Serves" className="col-lg-2 col-form-label">Serves</label>
              <div className="col">

                <div className="col-sm-10">

                  <input type="text" className="form-control" id="Serves" name="serves" value={recipes.serves} onChange={handlechange} />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">RecipeDescription</label>
              <input type="text" className="form-control" id="description" name="description" value={recipes.description} onChange={handlechange} />
            </div>
          </div>
          <div className="container border my-3 p-3">
            <div className="container d-flex justify-content-center my-3 "><h2>
              Ingredients
            </h2></div>
            <div className="row">
              <div className="container ">
                <ol className='my-3' style={{ "listStyle": " none" }}>
                  <Inputfield add={addclick} delete={deleteclick} onchange={handlechange} ingrident={ingridentlist}/>
                </ol>
              </div>
            </div>

          </div>
          <div className="container border my-3 p-3">
            <div className="container d-flex justify-content-center my-3"><h2>
              Steps
            </h2></div>
            <div className="row p-3">
              <div className="container ">
                <ol >
              
             {/* <StepInputField addst={addclickst} deletest={deleteclickst} onchange={handlechange1} stepdir={steps}/> */}
           {
             steprecipe.map((element,index)=>(
              <li key={index}>
              <div className="input-group ">
                  <input
                      type="text"
                      className="form-control m-3"
                      name="steps"
                      value={element.steps || ""}
                      onChange={e => handlechange1(index,e)}
                  />
  
                  {
                    index ?
                    <button type="button" onClick={() => deleteclickst(index)} className="m-3 btn btn-outline-secondary">
                      Delete
                  </button>:null
                  }
  
                  {/* {idx === (props.stepdir.length - 1) ? <button type="button" onClick={() => props.addst()} className="m-3 btn btn-outline-secondary">Add</button> : <button type="button" onClick={() => props.deletest(value)} className="m-3 btn btn-outline-secondary">
                      Delete
                  </button>} */}
  
              </div>
          </li>
              ) )}
           <li>
             <div className="container">
             <button type="button" onClick={() => addclickst()} className="m-3 btn btn-outline-secondary">Add</button>
             </div>
           </li>
                </ol>
                <div className="container">
                  <div className="row">
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-dark" type="button" onClick={handleclick}>Publish Recipe</button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </form>
    </>
  )
}
