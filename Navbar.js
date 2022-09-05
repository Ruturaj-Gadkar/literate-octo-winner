import {Link,NavLink} from "react-router-dom";
import "./App1.css"
export default function Navbar()               
{

    return(
        <div >

    <ul className="Navbar" >
    { <li> <NavLink className="nav-bar-link" to="/">Home</NavLink> </li>         /*  we cant apply claaname on link so use navlink */}
     
      <li> <NavLink className="nav-bar-link" to="/about">About</NavLink></li>
      
      <li> <NavLink className="nav-bar-link" to ="/contact">Contact</NavLink></li>

      <li> <NavLink className="nav-bar-link" to ="/filter">Filter</NavLink></li>
      </ul>
      
    </div>

    )
}