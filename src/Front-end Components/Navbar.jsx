import React from 'react'
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div id='navbar-link'>
        <div id="nav">
                <nav>
                    <div id="navbar">
                        <Link to='/home' id='navh' className="hover-underline-animation">Home</Link>
                        <Link to='/category' id='navb' className="hover-underline-animation">Tourism</Link>
                        <Link to='/technology'id='navt' className="hover-underline-animation">Technology</Link>
                        <Link to='/sport' id='navhl' className="hover-underline-animation">Sport</Link>
                        <Link to='/fitness' id='navf' className="hover-underline-animation">Fitness</Link>
                        <Link to='/food' id='navfd' className="hover-underline-animation">Food</Link>
                    </div>
                    
                </nav>
            </div>
    </div>
  )
}
