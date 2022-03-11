
import FavouriteRecipe from './FavouriteRecipe';
import img from '../containers/images/imgr.jpg';
// import RecipeItemList from './RecipeItemList';

import { BrowserRouter as Router,Switch, Route, Link ,useRouteMatch,
  useParams} from 'react-router-dom';
import MyRecipe from './MyRecipe';
import CreateRecipe from './CreateRecipe';
// import './profile.css'
export default function
  (props) {
  
    let { path, url } = useRouteMatch();
    console.log(path)
    console.log(url)
  return <>

    
    <div className="container">
      <div className="d-flex justify-content-center">
        
        <Link className="mx-2" aria-current="page" to={`${url}/FavouriteRecipe`}><button className="btn  btn-outline-dark">FavouriteRecipe</button></Link>
       
        <Link className="mx-2" to={`${url}/MyRecipe`}> <button className="btn  btn-outline-dark">MyRecipe</button></Link>
        <Link className="mx-2" to={`${url}/CreateRecipe`}><button className="btn  btn-outline-dark">CreateRecipe </button></Link>
      {/* <ul className="nav nav-tabs">
        <li className="nav-item fs-3 bg-info">
         
        </li>
        <li className="nav-item  fs-3">
          
        </li>
        <li className="nav-item fs-3">
          
        </li>

      </ul> */}
        </div>
   
      <div className="my-3">
        
      <Switch>   
        <Route exact path={`${path}/FavouriteRecipe`}><FavouriteRecipe showAlert={props.showAlert}/></Route>
        <Route exact path={`${path}/MyRecipe`}><MyRecipe showAlert={props.showAlert}/></Route>
        <Route exact path={`${path}/CreateRecipe`}><CreateRecipe showAlert={props.showAlert}/></Route>
      </Switch>
        </div>
    
     


    </div>
  



   






  </>
}
