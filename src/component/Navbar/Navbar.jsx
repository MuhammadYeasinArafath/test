import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
   
    function myFunction(){
        var x = document.getElementById("menu"); 
         
         if(x.style.display === "block")
         {
             x.style.display = "none";
         }
         else{
             x.style.display = "block";
         }
     }


    return (

        <>      
        <div className='Navbar'>
              <nav>


              <div class="menu-right">
            <span onClick={myFunction}>&#9776;</span>
           <ul id="menu">
            <li><Link to="/">Home</Link></li>    
            <li><Link to="/About">About</Link></li>    
            <li><Link to="/Blog">Blog</Link></li> 
            <li><Link to="/Contact">Contact</Link></li>
             
               
            </ul>
        </div>
              
              </nav>

        </div>
        </>
    );
};

export default Navbar;