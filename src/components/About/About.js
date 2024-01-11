import React from 'react'
import './About.css'
export default function About() {
  return (
    <div style={{minHeight:"100vh"}}>
     <div class="about-section">
  <h1>About Us Page</h1>
  <p>At SHOPx24, we are passionate about bringing you a delightful online shopping experience.
   Our mission is to provide a wide range of high-quality products and exceptional service, making your journey from browsing 
  to checkout as smooth as possible. Whether you're searching for the latest fashion trends, innovative gadgets, home essentials, 
  or unique gifts, we have something for everyone</p>
</div>
   
      <section>
      <div className='abo'>
        <h1>What Our Customers Say</h1>
        <div class="row">
      <div class="abcolumn">
        <div class="abcard">
          <h3>Our vision</h3>
          <p>- Sarah J.</p>
          <p>To become a leading destination for online shopping, offering an unparalleled selection of products and fostering long-lasting relationships with our valued customers.
</p>
           
        </div>
      </div>
    
      <div class="abcolumn">
        <div class="abcard">
          <h3>Our mission</h3>
          <p> - Mark W.</p>
          <p>To provide a seamless and enjoyable shopping experience, enabling our customers to discover and purchase products with confidence and ease.
</p>
             
        </div>
      </div>
      
      <div class="abcolumn">
        <div class="abcard">
          <h3>What we do </h3>
          <p> - Emily R.</p>
          <p>
SHOPx24 was founded on the principles of excellence and 
customer-centricity. We are a dedicated team of passionate individuals who share a common goal of making online shopping accessible and enjoyable for everyone.</p>
         
        </div>
      </div>
      
        </div>
    
      </div>
    </section>
    </div>
    
  )
}
