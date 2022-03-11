// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import React ,{useState} from 'react'
import NutrtionCalc from './components/NutrtionCalc';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import ViewRecipe from './components/ViewRecipe';
import ApiViewRecipe from './components/ApiViewRecipe';
import Footer from './components/Footer';
import Profile from './components/Profile';
// import FavouriteRecipe from './components/FavouriteRecipe';
import Catogory from './components/Catogory';
// import MyRecipe from './components/MyRecipe';
import RecipeState from './context/recipes/RecipeState';
import Alert from './components/Alert';
import SearchRecipe from './components/SearchRecipe';
import Userprofile from './components/Userprofile';
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  return (

    <>
<RecipeState>
<Router>
  <Navbar title='QuickRecipe'/>

  <Switch>
  <Route exact path='/SearchRecipe' ><SearchRecipe showAlert={showAlert}/></Route>
  </Switch>
  <Alert alert={alert}/>
     <Switch>
                 <Route exact path='/SignUp' >< SignUp showAlert={showAlert}/></Route>
                 <Route exact path='/Login' >< Login showAlert={showAlert} /></Route>
                 <Route exact path='/NutrtionCalc' ><NutrtionCalc/></Route>
                 <Route exact path='/' ><Home showAlert={showAlert}/></Route>
                 <Route exact path='/CreateRecipe' ><CreateRecipe/></Route>
                 <Route exact path='/ViewRecipe' ><ViewRecipe/></Route>
                 <Route exact path='/ApiViewRecipe' ><ApiViewRecipe/></Route>
                 <Route exact path='/ViewRecipe/123' ><ViewRecipe/></Route>
                 <Route path='/Profile' ><Profile showAlert={showAlert}/></Route>
                 <Route exact path='/Catogory' ><Catogory showAlert={showAlert}/></Route>
                 <Route exact path='/Userprofile' ><Userprofile showAlert={showAlert}/></Route>
                

          </Switch>
          </Router>
          <Footer/>
          </RecipeState>
</>
  );
}

export default App;
