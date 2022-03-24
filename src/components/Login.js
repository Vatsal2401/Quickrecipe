import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import Check from './Check'
import './Login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Login(props) {
const initialCredential={
  username:"",
  password:""
}
const [passwordShown, setPasswordShown] = useState(false);
const togglePassword = () => {
  // When the handler is invoked
  // inverse the boolean state of passwordShown
  setPasswordShown(!passwordShown);
};
  const [credential, setCredential] = useState(initialCredential)
  const handlechange=(e)=>{
    setCredential({...credential,[e.target.name]:e.target.value})
  }
  let history=useHistory();
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3005/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'authtoken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmY2I0OGNlNjI4Zjg1OGE2OGE1ZDYyIn0sImlhdCI6MTY0NDI5NTg0OX0.fX--r5OatakjeV-1qWynUIcufuJXwuhW9hWqHyAqjIs "
      },

      body: JSON.stringify({username:credential.username,password:credential.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      // save the auth token and redirect
      localStorage.setItem("token",json.authtoken);
      props.showAlert("Login successfully","success")
      history.push("/")
    }
    else{
      props.showAlert("Invalid Details","danger")
    }
  }
    return (
        < >

        
        <div className='container myContainer border'>
        <h1>Login</h1>
           <form onSubmit={handlesubmit} className="my-4">
  <div className="mb-3">
    <label htmlFor="username" className="form-label">UserName</label>
    <input type="text" className="form-control" id="username" name="username" value={credential.username} onChange={handlechange} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>

      <div class="input-group" id="show_hide_password">
    <input type={passwordShown ? "text" : "password"} className="form-control" id="password" name="password" value={credential.password}  onChange={handlechange}/>
      
      <div class="input-group-addon mx-1">
        {/* <a href=""></a> */}
    <button type='button' onClick={togglePassword}><i class={passwordShown?"fa fa-eye":"fa fa-eye-slash"} aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor"exampleCheck1">Check me out</label>
  </div> */}
  <div className="d-flex justify-content-center my-6"><button type="submit" className="btn  btn-outline-dark ">Login</button></div>
  <div className='my-3 row'><h6 className='col-md-6'>Not Registered?</h6> <Link className={`nav-link col-md-6`} aria-current="page" to="/SignUp">SignUp</Link> </div>
</form>



        </div>
        {/* <Check/> */}
        </>
    )
}
