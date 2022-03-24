import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom'

import './Signup.css'
export default function SignUp(props) {
  
  
const [passwordError, setPasswordErr] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");
const [passwordInput, setPasswordInput]= useState({
    password:'',
    confirmPassword:''
})
const handlePasswordChange =(evnt)=>{

  const passwordInputValue = evnt.target.value.trim();
  const passwordInputFieldName = evnt.target.name;
  const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
  setPasswordInput(NewPasswordInput);
  
}
const handleValidation= (evnt)=>{

  const passwordInputValue = evnt.target.value.trim();
  const passwordInputFieldName = evnt.target.name;

      //for password 
if(passwordInputFieldName==='password'){
  const uppercaseRegExp   = /(?=.*?[A-Z])/;
  const lowercaseRegExp   = /(?=.*?[a-z])/;
  const digitsRegExp      = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp   = /.{8,}/;

  const passwordLength =      passwordInputValue.length;
  const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
  const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
  const digitsPassword =      digitsRegExp.test(passwordInputValue);
  const specialCharPassword = specialCharRegExp.test(passwordInputValue);
  const minLengthPassword =   minLengthRegExp.test(passwordInputValue);

  let errMsg ="";
  if(passwordLength===0){
          errMsg="Password is empty";
  }else if(!uppercasePassword){
          errMsg="At least one Uppercase";
  }else if(!lowercasePassword){
          errMsg="At least one Lowercase";
  }else if(!digitsPassword){
          errMsg="At least one digit";
  }else if(!specialCharPassword){
          errMsg="At least one Special Characters";
  }else if(!minLengthPassword){
          errMsg="At least minumum 8 characters";
  }else{
      errMsg="";
  }
  setPasswordErr(errMsg);
  }

  // for confirm password
  if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
          
      if(passwordInput.confirmPassword!==passwordInput.password)
      {
      setConfirmPasswordError("Confirm password is not matched");
      }else{
      setConfirmPasswordError("");
      }
      
  }

}

  const [passwordShown, setPasswordShown] = useState(false);
const togglePassword = () => {
  // When the handler is invoked
  // inverse the boolean state of passwordShown
  setPasswordShown(!passwordShown);
};
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
    <div class="input-group" id="show_hide_password">
    
    <input type={passwordShown ? "text" : "password"}className="form-control" id="password" name='password' value={credential.password}  onChange={handlechange} minLength={5} required/>
      
      <div class="input-group-addon mx-1">
    <button type='button' onClick={togglePassword}><i class={passwordShown?"fa fa-eye":"fa fa-eye-slash"} aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
  <div className="">
    <label htmlFor="cpassword" className="form-label">ConfirmPassword</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' value={credential.cpassword}  onChange={handlechange} minLength={5} required/>
  </div>
 
 
  <div className="d-flex justify-content-center my-3 mb-3"><button type="submit" className="btn  btn-outline-dark  ">SignUp</button></div>
  
</form>


        </div>
      
        </>
    )
}
