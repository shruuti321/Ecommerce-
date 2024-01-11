import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth,db} from '../firebase'
import {collection,addDoc} from 'firebase/firestore'

export default function Login() {
 const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   
    const navigate=useNavigate()

    const [errorMsg,setErrorMsg]=useState("")
    const [successMsg,setSuccessMsg]=useState("")

   /* const handleClose=()=>{
      console.log("hello")
      var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none";}, 100);
  }
}
    }*/
    const handleLogin=(e)=>{
      e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
          setSuccessMsg('Logged in successfully! Redirecting you in a while')
          setEmail('')
          setPassword('')
          setErrorMsg('')
          setTimeout(()=>{  
            setSuccessMsg('');
            navigate('/ProductList');
        },3000);
        })
        .catch((error)=>{ 
          if(error.message==='Firebase: Error (auth/user-not-found).'){
                setErrorMsg('Email Not Found! Try Again')
          }
          if(error.message==='Firebase: Error (auth/wrong-password).'){
            setErrorMsg('Wrong Password! Try Again')
      }
          if(error.message==='Firebase: Error (auth/invalid-email).')
          {
              setErrorMsg('Invalid credentials! Try Again')
          }
  })
    }
  return (
    <div style={{minHeight:"100vh"}}>
      <div className='signup'>
     
     {successMsg && <>
      <div class="alert alert-success alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            {successMsg}
        </div></>}
        {errorMsg && <>
        <div class="alert alert-danger alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    
          
            {errorMsg}
            </div></>}
        <form className='login-form' style={{height:"350px"}}>
           
        <h1 className='loginhead'>Login here</h1>
            <label>Email:</label>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email id"/>
            <label>Password:</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
            
            <div className='bott'>
            <button className="log" type='submit' onClick={handleLogin}>LOG IN</button>
            <div>
                <span>Don't have an account ?  </span>
                <Link to='/Signup' className='link'>Sign Up</Link>
            </div>
            </div>
        </form>
     </div>
 
    </div>
  )
}
