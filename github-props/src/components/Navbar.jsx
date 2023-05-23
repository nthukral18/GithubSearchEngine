import React from "react";
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div className = "navbar"  >
           <Link to ="/"> <i className = "fa-brands fa-github fa-2x"></i> Github search engine</Link>
            <div>
                <Link to = "/contact">Contact us</Link>
                <Link to ="/about"> About us</Link>
            </div>
        </div>
    )
}
export default Navbar;