import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import {FaStar} from "react-icons/fa";
// import About from '../About/About';
//import Footer from  './Footer/Footer'
export default function Home({loggeduser}) {
  const mystyle={
    width:"100px",
    height:"45px",
    marginLeft:"140px",
    marginRight:"-130px",
    paddingBottom:"20px",
    paddingTop:"10px",
    background:"transparent",
    color:"white",
    border:"solid",
    borderColor:"white",
    fontWeight:"bold",
    fontSize: "20px" 
  }
  return (
    <div className="main">
      <div className='example'>
      <img src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1." alt="" width="100%" height="550px"/>
   <div className='overlay'>
    <h1 className='display-2 fw-bold mb-0'>NEW ARRIVALS</h1>
    <p className='lead fw-normal fs-2'>CHECK OUT ALL THE LATEST TRENDS </p>
    {!loggeduser && 
    <div className='buttons'>
    {/* <button className="but" style={mystyle}><span>LOG IN</span></button>   */}
    
    <Link to={'/Login'} className="but btn1" style={mystyle}><span>LOG IN</span></Link>   
    {/* <button className="but btn1" style={mystyle}><span>SIGN UP</span></button>    </div> */}
    <Link to={'/Signup'} className="but btn1" style={mystyle}><span>SIGN UP</span></Link>    </div>}

   {loggeduser && <div>WELCOME {loggeduser[0].username.toUpperCase()}</div>}
   
   <p className='display-2  fw-italic fs-2' style={{marginTop:"10px",fontstyle:"italic"}}>ELEVATE YOUR SHOPPING EXPERIENCE! </p>
    </div> 
    </div>
    {/*<div className="card text-bg-dark border-0">
  <img src="..." className="card-img"  alt="..." />
  <div className="card-img-overlay d-flex flex-column">
    <h5 className="card-title display-3 fw-bolder mb-0" style={{marginLeft:"40px",marginTop:"55px"}}>NEW ARRIVALS</h5>
    <p className="card-text lead fs-2" style={{marginLeft:"40px"}}>CHECK OUT ALL THE LATEST TRENDS </p>
    <div>
    <button className="but" style={mystyle}><span>LOG IN</span></button>  
    
    <button className="but btn1" style={mystyle}><span>SIGN UP</span></button>    </div>
  </div>
  </div>*/}
  {/* <div id="two"><About/></div> */}
  <section className='feature'>
    <div className='caro'>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/previews/000/185/814/original/yellow-abstract-big-sale-banner-or-voucher-design-template-vector.jpg" className="d-block w-100" alt="..."/>
      {/* https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 */}
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src=" https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</section>
<section className='test'>
  <div>
    <h1>What Our Customers Say</h1>
    <div class="row">
  <div class="column">
    <div class="homecard">
      <h3>"Amazing Selection and Fast Delivery!"</h3>
      <p>- Sarah J.</p>
      <p>I love shopping on this website! They have a fantastic variety of products, and I always find what I need. 
        Plus, the delivery is super fast, which is perfect when you need something urgently. Highly recommended!</p>
        <p><FaStar color="#DAA520"/><FaStar color="#DAA520"/><FaStar color="#DAA520"/><FaStar color="#DAA520"/></p>
    </div>
  </div>

  <div class="column">
    <div class="homecard">
      <h3>"Excellent Customer Service!"</h3>
      <p> - Mark W.</p>
      <p>I had a small issue with my order, but the customer service team was incredibly helpful and resolved it quickly.
         It's rare to find such responsive and caring support these days. This is why I keep coming back to this site for all my purchases.</p>
         <p><FaStar color="#DAA520"/><FaStar color="#DAA520"/><FaStar color="#DAA520"/></p>
    </div>
  </div>
  
  <div class="column">
    <div class="homecard">
      <h3>"Quality Products at Great Prices!" </h3>
      <p> - Emily R.</p>
      <p>I've been a loyal customer for years, and I'm never disappointed. The products are of top-notch quality, 
        and they have regular sales and discounts, making it even better. I trust this website for all my shopping needs.</p>
        <p><FaStar color="#DAA520"/><FaStar color="#DAA520"/><FaStar color="#DAA520"/><FaStar color="#DAA520"/></p>
    </div>
  </div>
  
  <div class="column">
    <div class="homecard">
      <h3>"Best Online Shopping Experience!"</h3>
      <p> - Jennifer M.</p>
      <p>I love online shopping, and this website has provided me with the best experience so far. From the extensive product 
        range to the customer service, everything is top-notch. Thank you for making shopping easy and enjoyable!

</p>
<p><FaStar color="#DAA520"/><FaStar color="#DAA520"/><FaStar color="#DAA520"/></p>
    </div>
  </div>
</div>

  </div>
</section>
  </div>
  
  )
  
}
 