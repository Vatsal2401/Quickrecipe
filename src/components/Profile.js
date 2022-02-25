
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

      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid  rounded-circle" alt="..." />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">user Name</h5>
              <strong className="d-inline-block mb-2 text-primary">UserId</strong>

            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">

            <button type="button" className="btn btn-outline-warning mx-2">EditProfile</button>
            <button type="button" className="btn btn-outline-warning mx-2">Logout</button>

          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={`${url}/FavouriteRecipe`}>FavouriteRecipe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`${url}/MyRecipe`}>MyRecipe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`${url}/CreateRecipe`}>CreateRecipe</Link>
        </li>

      </ul>
      {/* <FavouriteRecipe/> */}
      <Switch>
        
        {/* <Route exact path={`${path}/FavouriteRecipe`} component={FavouriteRecipe}/> */}
        {/* <Route exact path={`${path}/MyRecipe`} component={MyRecipe}/> */}
        <Route exact path={`${path}/FavouriteRecipe`}><FavouriteRecipe showAlert={props.showAlert}/></Route>
        <Route exact path={`${path}/MyRecipe`}><MyRecipe showAlert={props.showAlert}/></Route>
        {/* <Route exact path={`${path}/CreateRecipe`} component={CreateRecipe}/> */}
        <Route exact path={`${path}/CreateRecipe`}><CreateRecipe showAlert={props.showAlert}/></Route>
      </Switch>
     
    
 <div className="row">
 <div className="col-md-3 border-right">
   <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" /><strong className="d-inline-block mb-2 text-primary">UserName</strong><span> </span></div>
 </div>
 <div className="col-md-9 border-right">
   <div className="p-3 py-5">
     <div className="d-flex justify-content-between align-items-center mb-3">
       <h4 className="text-right">Profile Settings</h4>
     </div>
     <div className="row mt-2">
       <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value="" /></div>
       <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname" /></div>
     </div>
     <div className="row mt-3">
       <div className="col-md-12"><label className="labels">PhoneNumber</label><input type="text" className="form-control" placeholder="enter phone number" value="" /></div>
       {/* <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" value=""/></div> */}
       <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="" /></div>
       <div className="col-md-12"><label className="labels">About</label><input type="text" className="form-control" placeholder="Tell about yourself" value="" /></div>
     </div>

     <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
   </div>
 </div>

</div>

    </div>
  



   






  </>
}
