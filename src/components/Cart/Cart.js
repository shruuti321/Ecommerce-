import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Cart.css';
export default function Cart({cart,handleRemove}) {
  const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

  
    

  return (
    <div className="outer">
      
     <h1 style={{textAlign:"center"}}>{CART.length===0?'Cart is empty':'Your Cart'}</h1>
  
    <div>
      {
             CART?.map((cartItem,cartIndex)=> {
        return(
          <div className='contain'>

            <div className='items'>
           <div className='child'> <img src={cartItem.image} className='image' alt="" height={170} width={150}/></div>
           <div className='det'> <span className='text'>{cartItem.title.substring(0,67)}</span>
           
           <span className='text'>&#8377;{Math.floor(cartItem.price * cartItem.quantity*82)}/-</span>
            <span className='text'><button className='cartBut' onClick={()=>{
              const _CART=CART.map((item,index)=>{
                return cartIndex===index?{...item,quantity:item.quantity>1 ? item.quantity-1:handleRemove(cartItem)}:item
              })
              setCART(_CART)
           }}>-</button>
          
            {cartItem.quantity}
            
          <button className='cartBut' onClick={()=>{
              const _CART=CART.map((item,index)=>{
                return cartIndex===index?{...item,quantity:item.quantity+1}:item
              })
              setCART(_CART)
            }}
            >+</button></span>
            <span className='text'><button className='rem'  onClick={()=>handleRemove(cartItem)}>Remove</button></span>
            </div>
            </div>
            
          </div>
        )
      })
    }
   {cart.length!=0 && <div className='total'>  
    <h1>Order Summary:</h1>
      <p className="price"> Total Price:    <span>&#8377;</span>
                {
                    CART.map(item => Math.floor(item.price*82* item.quantity)).reduce((total, value) => total + value, 0)
                }
           /- </p>
           </div>}
    </div>
    </div>
  )
}
