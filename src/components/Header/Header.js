import React from 'react';
import './Header.css';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import {auth,db} from '../firebase';
import { signOut } from "firebase/auth";
import {collection,getDocs,query, where} from 'firebase/firestore'

export default function Header({count}) {
  function GetCurrentUser(){
    const [user,setUser]=useState('')

    useEffect(()=>{
      auth.onAuthStateChanged(userlogged=>{
              if(userlogged){
                const getUser=async()=>{
                  const q=query(collection(db,"users"),where("uid","==",userlogged.uid))
                  console.log(q)
                  const data=await getDocs(q);
                setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
                }
                getUser();
              } 
              else {
                setUser(null);
              }
      })
    },[])
    return user;
  }
    const loggeduser=GetCurrentUser()
    if(loggeduser){console.log(loggeduser[0].email)}

    const navigate=useNavigate()

    const handleLogout=()=>{
     
      auth.signOut().then(()=>{
        navigate('/Login')
      })
    }
    
  return (
     <div className="flex head">
      <div className='name'>
        SHOPx24
      </div>
      
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/ProductList">Product List</Link>
      <Link className=''></Link>
      <Link className="about" to="/About">About</Link>  
       {/* <Link className="nav" to="/Home">Logout</Link> */}
       {!loggeduser && <><Link className="nav logout" to="/Login">Login</Link>
       <Link className="cart" to="/Login"><FaShoppingCart size={35}/>{/*<sup>{count}</sup>*/}</Link></>}
       {loggeduser && <><button className="nav logout" onClick={handleLogout}>Logout</button>   
        <Link className="cart" to="/Cart"><FaShoppingCart size={35}/><sup>{/*{loggeduser[0].cart}*/}{count}</sup></Link></>}
      
      </div>
  );
}
