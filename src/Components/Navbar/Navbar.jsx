import React from 'react'
import "./Navbar.scss"
import { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";
const Navbar = () => {
  const [active,setActive] = useState(false);
  const [open,setOpen] = useState(false);

  const{pathname} = useLocation()

  const isActive = () =>{
    window.scrollY  > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() =>{
     window.addEventListener("scroll" , isActive);

     return ()=>{
     window.removeEventListener("scroll", isActive);
     };
  }, []);

  const currentUser = {
    id:1,
    username : "John Doe",
    isSeller : true,

  }
  return (
    <div className={active || pathname!="/"? "navbar active" : "navbar"}>
    <div className="container">
      <div className="logo">   
      <Link to="/" className='link'>
      <span className="texts">SkillServe</span>
      </Link> 
      
      <span className="dot">.</span>
      </div>
     
        <div className="links">
          <span className="abc">Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Login</span>
          {!currentUser ?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser &&(
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {
                  currentUser?.isSeller &&(
                    <>
                    <Link className ="link" to="myGigs">Gigs</Link>
                    <Link className="link" to="Add">Add New Gig</Link>
                    </>
                  )}
                  <Link className="link" to="orders">Orders</Link>
                  <Link className="link" to="Messages">Messages</Link>
                  <span>Logout</span>
              </div>}
            </div>
          )}
        </div>
        </div>
        { (active || pathname!="/") && (
          <>
        <hr />
        <div className="menu">
          <Link className='link menuLink' to="/" >Graphics & Design</Link>
          <Link className='link ' to="/" >Video & Animation</Link>
          <Link className='link ' to="/" >AI Services</Link>
          <Link className='link' to="/" >Writing & Translation</Link>
          <Link className='link' to="/" >Music & Audio</Link>
          <Link className='link' to="/" >Programming & Tech</Link>
          <Link className='link' to="/" >Digital Marketing</Link>
          <Link className='link' to="/" >Business</Link>
          <Link className='link' to="/" >Lifestyle</Link>
        </div>
        </>
        )}
     </div>
    
  );
};

export default Navbar
