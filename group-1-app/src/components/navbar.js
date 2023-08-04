import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <nav className='nav' style={{width:"100%",height:"50px",marginTop:"0px"}}>
           <ul>
             <li style={{fontSize:"30px"}}><NavLink to="/login">Log in</NavLink></li>
             <li style={{fontSize:"30px"}}><NavLink to="/restaurants">Restaurants</NavLink></li>
             <li style={{fontSize:"30px"}}><NavLink to="/cart">View Menu</NavLink></li>
             <li style={{fontSize:"30px"}} ><NavLink to="/filter">Search</NavLink></li>
             <li style={{fontSize:"30px"}}><NavLink to="/orderform">Order</NavLink></li>
            

            </ul>
        </nav>
        
    )
}