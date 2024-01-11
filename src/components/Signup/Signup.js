import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth,db} from '../firebase'
import {collection,addDoc} from 'firebase/firestore'

import './Signup.css'
export default function Signup() {
    
    const [username,setUserName]=useState("")
    const [phone,setPhoneNumber]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")

    const navigate=useNavigate()

    const [errorMsg,setErrorMsg]=useState("")
    const [successMsg,setSuccessMsg]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                const user=userCredential.user;
                const initialcartvalue=0;
                console.log(user);

                addDoc(collection(db,"users"),{
                    username:username,email:email,
                    phonenumber:phone,password:password,
                cart:initialcartvalue,address:address,uid:user.uid
                }).then(()=>{
                    setSuccessMsg('new user added')
                    setUserName('')
                    setPhoneNumber('')
                    setEmail('')
                    setPassword('')
                    setErrorMsg('')
                    setTimeout(()=>{  
                        setSuccessMsg('');
                        navigate('/Login');
                    },4000);
                })
                .catch((error)=>{ 
                    if(error.message==='Firebase: Error (auth/email-already-in-use).'){
                          setErrorMsg('User already exists')
                    }

                    if(error.message==='Firebase: Error (auth/invalid-email).')
                    {
                        setErrorMsg('please fill required fileds')
                    
                    }
                    if(error.message==='Firebase: Password should be at least 6 characters (auth/weak-password).')
                    {
                        setErrorMsg('weak password')
                    }
                    

            })
        
    })
}
  return (
    <div style={{minHeight:"100vh"}}>
     <div className='signup'>
     
     {successMsg && <>
        <div>
            {successMsg}
        </div></>}
        {errorMsg && <>
        <div >
            {errorMsg}
            </div></>}
        <form className='signup-form' onSubmit={handleSubmit}>
           
        <h1 className='signhead'>Create account</h1>
            <label>Your Name:</label>
            <input type='text' onChange={(e)=>setUserName(e.target.value)} placeholder="Enter full name"/>
    
            <label>Mobile No:</label>
            <input type='tel' onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Enter mobile number"/>
            <label>Email:</label>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email id"/>
            <label>Password:</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
            
            <label>Address:</label>
            <textarea type='address' rows="5" onChange={(e)=>setAddress(e.target.value)} placeholder="Enter address"/>
            <div className='bott'>
            <button className="sign"type='submit'>SIGN UP</button>
            <div>
                <span>Already have an account ?  </span>
                <Link to='/Login' className='link'>Sign in</Link>
            </div>
            </div>
        </form>
     </div>
    </div>
  )
        }
 