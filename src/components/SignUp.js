import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom'

import './Login.css'
export default function SignUp(props) {
  const [credential, setCredential] = useState({name:"",username:"",password:"",cpassword:""})
  const handlechange=(e)=>{
    setCredential({...credential,[e.target.name]:e.target.value})
  }
  let history=useHistory();
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3005/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'authtoken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmY2I0OGNlNjI4Zjg1OGE2OGE1ZDYyIn0sImlhdCI6MTY0NDI5NTg0OX0.fX--r5OatakjeV-1qWynUIcufuJXwuhW9hWqHyAqjIs "
      },

      body: JSON.stringify({name:credential.name,username:credential.username,password:credential.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      // save the auth token and redirect
      localStorage.setItem("token",json.authtoken);
      props.showAlert("Account created successfully","success")
      history.push("/")
     
    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }
  }
    return (
        < >

         
<div className='container myContainer border '>
        <h1>SignUp</h1>
           <form onSubmit={handlesubmit} className="my-3 pb-3">
           <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" value={credential.name} onChange={handlechange} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">UserName</label>
    <input type="text" className="form-control" id="username" name="username" value={credential.username} onChange={handlechange} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credential.password}  onChange={handlechange} minLength={5} required/>
  </div>
  <div className="">
    <label htmlFor="cpassword" className="form-label">ConfirmPassword</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' value={credential.cpassword}  onChange={handlechange} minLength={5} required/>
  </div>
 
 
  <div className="d-flex justify-content-center my-3 "><button type="submit" className="btn btn-primary  ">SignUp</button></div>
  
</form>


        </div>
      
        </>
    )
}
