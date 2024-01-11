import React from 'react';
import './productList.css';
import { useState } from 'react';
import { useEffect } from 'react';
 import {Link,useNavigate} from 'react-router-dom';
export default function ProductList({product,addToCart,loggeduser}) {
 // const {category}=useParams()
 const navigate=useNavigate()
  const[filt,setFilt]=useState([product])
 /* useEffect(()=>{
  const filter=async(cat)=>{
  let d=await fetch(`https://fakestoreapi.com/products/category/${category}`);
  let fil=await d.json();
  console.log(fil);
  setFilt(fil)}
  filter()
  },[])
  console.log(filt);*/
  useEffect(()=>{
    setFilt(product)
  },[product])

  const filterProduct=(cat)=>{
    const updatedList=product.filter((x)=>x.category===cat);
    setFilt(updatedList)
  }

    return (
    <div>
      <div className="but d-flex justify-content-center mb-5">
      <button type="button" className="btn btn-outline-dark" onClick={()=>setFilt(product)}>All</button>
      <button type="button" className="btn btn-outline-dark" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
      <button type="button" className="btn btn-outline-dark" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
      <button type="button" className="btn btn-outline-dark" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
      <button type="button" className="btn btn-outline-dark" onClick={()=>filterProduct("electronics")}>Electronics</button>

      </div>
    
    <div className='flex container' /*style={{display:"grid"}}*/>
      {
        filt?.map((productItem,productIndex)=>{
          return(
  <div className='col-md-3 mb-4'>
            <div className="card text-center p-4" >
              
        <img src={productItem.image} className="card-img-top" alt="..." style={{height:'250px'}}/>
        <div className="card-body">
    <h5 className="card-title">{productItem.title/*.substring(0,12)*/}</h5>
    <p className="card-text">{productItem.seller}</p>
    <p className="card-text">&#8377;{Math.floor(productItem.price*82)}/-</p>
    <div className='buttons'>
      <button type='button' className='btn btn-outline-dark' onClick={/*loggeduser?*/()=>addToCart(productItem)/*:navigate('/Login')*/}>Add to Cart</button>  
     
     <Link to={`/ProductList/${productItem.id}`} className='btn btn-outline-dark'>Buy Now</Link>  
</div>
  </div>
</div>


 </div>
          )
        })
      }
    </div>
    </div>
  )
}
