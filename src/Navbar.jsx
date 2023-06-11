import React, { useState ,useEffect} from 'react'
import { NavLink } from "react-router-dom";
// import './images/Basket_man.png'
// import './App.css'

// import { FaUserLock } from "react-icons/fa";
// import { FontAwesomeIcon } from "react-icons/fa";



const Navbar = () => {
  const navigate =()=>{
    console.log('table')
  }

  // const adminPanel = () =>{
  //    navigate("/admin")
  // }
  

  const [intialNavBar, setNavBar] = useState(false);
  const [stopScroll, setScrollTop] = useState(false);
  // const [noTable, setTable] = useState(false);


  // let menu = document.querySelector('#menu-bar');
  // let navbar = document.querySelector('.navbar');
  // const showBar =()=>{
  //   console.log("working")
  //   // setNavBar((olditems)=>{

  //   // })
  // //  console.log("1st"+intialNavBar)
  // //   intialNavBar?menu.classList.toggle('fa-times'): navbar.classList.toggle('active')
  //   // setNavBar(!intialNavBar)
  // //   console.log("2nd"+intialNavBar)

  // if (intialNavBar==true){
  //   console.log('if wali')
  //   menu.classList.toggle('fa-times')
  //   navbar.classList.toggle('active')
  // } else{
  //   console.log("else wali site")
  //   setNavBar(!intialNavBar)
  // }

  // }


// ======Scrolling==Both Working=====================================================================================
  
useEffect(() => {
    const handleScroll = (event) => {
      // console.log(event)
      setScrollTop(window.scrollY);
      setNavBar(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 400) {
//             setScrollTop(true);
            
//         } else {
//           setScrollTop(false);
//         }
//     });
// }, []);

// =======================================================================================================

// console.log("intialNavBar" + intialNavBar)
// console.log("stopScroll" + stopScroll)

// =================================================================================

const showPages = () =>{
  //it is for the mobile  when some one click any of the option in navbar the navbar automatically wrap/shrink
  console.log(" page btn")
  setNavBar(false)
}
  
  return <>
    <header>
      {/* <a href="/"  className="logo"><i className="fas fa-utensils"></i>food </a> */}
      <a href="/"  className="logo"><i className="fas fa-utensils"></i>food </a>

      {/* <div id="menu-bar" className="fas fa-bars " onClick={showBar}></div> */}
      {/* <div id="menu-bar" className={intialNavBar? "fas fa-bars fa-times" :"fas fa-bars" } onClick={()=>{setNavBar(!intialNavBar)}}></div> */}
      <div id="menu-bar" className={(intialNavBar && !(stopScroll))? "fas fa-bars fa-times" :"fas fa-bars" } onClick={()=>{setNavBar(!intialNavBar); setScrollTop(false)}}  ></div>

     

      
      
      {/* <nav className="navbar "> */}
      <nav className={(intialNavBar && !(stopScroll))? "navbar active" : "navbar" }>
{/*       
        <a href="#home ">Home</a>
        <a href="#home ">speciality </a>
        <a href="#popular ">Popular </a>
        <a href="#gallery ">Gallery </a>
        <a href="#review ">Review </a> */}
{/* 
        <NavLink exact to="/" onClick={showPages}> Home</NavLink> */}
        <NavLink exact to="/speciality" onClick={showPages}> Speciality </NavLink>
        <NavLink exact to="/popular" onClick={showPages}>popular</NavLink>
        <NavLink to="/gallery" onClick={showPages}> Gallery </NavLink>
        <NavLink to="/review" onClick={showPages}> Review </NavLink>
        {/* <NavLink to="/review"> {stopScroll}</NavLink> */}
        <NavLink to="/order" onClick={showPages}> Shop</NavLink>
        {/* <NavLink to="/review"> <FaUserLock /> </NavLink> */}
        {/* <a href="/"  className="logo"><i className="fas fa-utensils"></i></a> */}
        <NavLink to="/admin" onClick={navigate} > Admin</NavLink>

        <NavLink to="/cart" onClick={showPages}> <img class="cart" src="./images/Basket_man.png" alt="cart" /><sup class="cart_item">2</sup></NavLink>
       


      </nav>
    </header>
  </>
}

export default Navbar;