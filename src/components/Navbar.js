import React, { useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>C</span>hitrakar
            <span>S</span>tudios
          </h2>
         
        </div>
       
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>

            {
              isAuthenticated ? (
                <li>
                  <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
                </li> 
              ) :
              <li>
                <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            }
            <li>
          {isAuthenticated && <p>{user.name}</p>}
        </li>
          </ul>
        </div>

        <div className="search">
        
          <ul className="search-desktop">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
