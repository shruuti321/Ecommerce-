import React from 'react'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import {FaStar} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
export default function Product({addToCart,loggeduser}) {
  const navigate=useNavigate()

  const {id}=useParams();
  console.log(id);
  const [prod,setProd]=useState([])
  useEffect(()=>{
    const getProd=async()=>{
      const response=await fetch(`https://fakestoreapi.com/products/${id}`);
      const d=await response.json();
      console.log(d);
      setProd(d);
    }
    getProd()
  },[id])

      const showProd=()=>{
        return(
          <>
          <div className='col-md-6' style={{marginTop:"17px"}}>
          <img src={prod.image} alt={prod.title} height="400px" width="400px" style={{marginTop:"80px"}}/>
          </div>
          <div className='col-md-6' style={{width:"650px",marginTop:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",padding: "16px"}} >
            <h4 className="text-uppercase text-black-50">
              {prod.category}
              </h4>
              <h1 className='display-5'>{prod.title}</h1>
              <p className="lead fw-bolder">
              Rating {prod.rating && prod.rating.rate}&#160;<FaStar size={18}/></p>
              <h3 className="display-6 fw-bold my-4">&#8377;{Math.floor(prod.price*82)}/-</h3>
              <p className="lead">{prod.description}</p>
              <button type='button' className='btn btn-outline-dark' style={{align:"center",marginBottom:"3px"}} onClick={/*loggeduser?*/()=>addToCart(prod)/*:navigate('/Login')*/}>Add to Cart</button> 
              
              <button type='button' className='btn btn-outline-dark' style={{align:"center",marginBottom:"3px"}}>Buy Now</button> 
          </div>
          </>
        )
      }
    
  return (
    <div>
      <div className="container py-5">
        <div className="row">
       {showProd()}
       </div>
      </div>
    </div>
  )
}
