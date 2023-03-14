import React from 'react';
import "./Navbar.css";
import logo from "../../images/logo .svg";
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

const Navbar = () => {

  const { openSidebar, openSubmenu, closeSubmenu }= useGlobalContext();

  return (
    <nav className='navbar'>
      <div className="nav-container">

        <div className="nav-logo">
          <img src={logo} alt="Stripe" />
          <button className="toggle-btn" onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn">Products</button>
          </li>
          <li>
            <button className="link-btn">Developers</button>
          </li>
          <li>
            <button className="link-btn">Company</button>
          </li>
        </ul>

        <button className="signin-btn">Sign In</button>

      </div>
    </nav>
  );
};

export default Navbar;
