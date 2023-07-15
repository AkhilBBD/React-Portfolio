import React from "react";
import "./Navbar.scss";
import  {navLinks}  from "../../Data";
import { socialIcons } from "../../Data";


const Navbar = () => {
    return (
<div>
    <div className="Nav_container">
        <ul className="nav_links">
{navLinks.map((navLink,index) => {
    return <li key={index}>
        <a href={`${navLink}`}>{navLink}
        </a>
    </li>
})}
        </ul>
        <div className="social_icons">
            {socialIcons.map((socialIcon,index)=>{
                return (
                      <div key={index}>
                          {socialIcon}
                      </div>
                  )
            })}
        </div>
    </div>
</div>
    );
};

export default Navbar;