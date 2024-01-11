import React from 'react'
import './Footer.css'
import { FaInstagram} from "react-icons/fa";

import { FaFacebook} from "react-icons/fa";

import { FaGithub} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";
export default function Footer() {
  return (
  <div className='foot'>
    <footer className="bg-dark text-center text-white">
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      <a className="btn btn-outline-light btn-floating m-1 ic" href="#!" role="button" style={{color:"white"}}

        ><FaFacebook size={20}/></a>

      {/* <!-- Twitter --> */}
      <a className="btn btn-outline-light btn-floating m-1 ic" href="#!" role="button" style={{color:"white"}}

        ><FaTwitter size={20}/></a>

      {/* <!-- Google --> */}
      <a className="btn btn-outline-light btn-floating m-1 ic" href="#!" role="button" style={{color:"white"}}

        >{/*<i className="fab fa-google"></i
  >*/}<FaGoogle size={20}/></a>

      {/* <!-- Instagram --> */}
      <a className="btn btn-outline-light btn-floating m-1 ic" href="#!" role="button" style={{color:"white"}}

        >{/*<i className="fa-brand fa-instagram"/>*/}<FaInstagram size={24}/></a>

      {/* <!-- Linkedin --> */}
      
      {/* <!-- Github --> */}
      <a className="btn btn-outline-light btn-floating m-1 ic" href="#!" role="button" style={{color:"white"}}
        ><FaGithub size={20}/></a>
    </section>
    <div className='links'>
		<a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
		<a href="#">Contact Us</a>
		</div>
		
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
    © 2023 Copyright&#160;:&#160;&#160;
    <a className="copy text-white" href="#">SHOPx24</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
  </div> 
   )
}
