
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import About from './components/About/About';
import ProductList from './components/productList/ProductList';
import Home from './components/Home/Home';

import Signup from './components/Signup/Signup';

import Login from './components/Login/Login';
import Productinfo from './components/Productinfo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {auth,db} from './components/firebase'
import {collection,getDocs,query, where} from 'firebase/firestore'

import Footer from  './components/Footer/Footer';
// import { FaCart } from "react-icons/fa";
function App() {
 
  const [product,setProduct] = useState([])
  useEffect(()=>{
    const fetchProduct=async()=>{
          
    let url="https://fakestoreapi.com/products";
    let d=await fetch(url);
    let parsedData=await d.json();
    console.log(parsedData);
    setProduct(parsedData)
        }
        fetchProduct()
      },[])

     
  // const [product, setProduct] = useState([
  //   {
  //     url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
  //     name: 'TRQ White Shoes',
  //     category: 'Shoes',
  //     seller: 'AMZ Seller Ghz',
  //     price: 1999
  //   },
  //   {
  //     url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
  //     name: 'LOREM Watch Black',
  //     category: 'Watches',
  //     seller: 'Watch Ltd Siyana',
  //     price: 2599
  //   },
  //   {
  //     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
  //     name: 'AMZ Laptop 8GB RAM',
  //     category: 'Laptops',
  //     seller: 'Delhi Laptops',
  //     price: 50000
  //   },
  //   {
  //     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
  //     name: 'Security Camera',
  //     category: 'CCTV',
  //     seller: 'Camron LTD',
  //     price: 4000
  //   },
  //   {
  //     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
  //     name: 'Watch Pink',
  //     category: 'Watches',
  //     seller: 'Watch Ltd',
  //     price: 2000
  //   },
  //   {
  //     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
  //     name: 'Cup red Color',
  //     category: 'Cup',
  //     seller: 'ABS Ltd',
  //     price: 100
  //   },
  // ])

  const[cart,setCart]=useState([])

  const addToCart=(data)=>{
    // const exist=data.find()
    // https://youtu.be/SSXA2XluIBU
    // https://www.youtube.com/watch?v=iRVtf32Lwt4&t=542s
   if(loggeduser){
    console.log("hello")
   }
   else{
      console.log('bye')
   }
   const exist=cart.find(i=>i.id===data.id);
    if(exist){
      exist.quantity+=1;
      setCart([...cart]);
    }
    else{
    setCart([...cart,{...data,quantity:1}])
    //console.log(data.id)
  }

  
  }
  const handleRemove=(data)=>{
    const afterDel=cart.filter((x)=>x.id!==data.id);
    setCart(afterDel)
}

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
    
  return (
    <div>
      <Router>
    <Header count={cart.length}/>
    {/* <Home/> */}
    <Routes>
    
      <Route exact path="/" element={<Home loggeduser={loggeduser}/>}></Route>
      <Route exact path="/ProductList" element={<ProductList product={product} addToCart={addToCart} loggeduser={loggeduser}/>}></Route>
      <Route exact path="/Cart" element={<Cart cart={cart} handleRemove={handleRemove}/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
      <Route exact path="/ProductList/:id" element={<Productinfo addToCart={addToCart} loggeduser={loggeduser}/>}></Route>
      <Route exact path="/Signup" element={<Signup/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      
   
   
    </Routes>
  {/* <p>{loggeduser?"hello":"bye"}</p> */}
     <Footer/> 
    </Router>
    </div>
    )
}

export default App;
