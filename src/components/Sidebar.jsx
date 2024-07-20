import React from "react";
import '../styles/Sidebar.css';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStore, faShoppingBag, faSignOutAlt  } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top-sidebar">
          <Link to='/'>
          <div className="logo">
            <img src={Logo} alt="commerce website logo" />
          </div>
          </Link>
          <button className="btn menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
          
          <ul className="nav-links">
            <Link to='/' className="link">
            <li>
              <button className="btn">
              <FontAwesomeIcon icon={faStore} />
              </button>
            </li>
            </Link>
            <Link to='/bag' className="link">
            <li>
              <button className="btn">
              <FontAwesomeIcon icon={faShoppingBag} />
              </button>
            </li>
            </Link>
          </ul>
        </div>
        <div className="bottom-sidebar">
          <ul className="nav-links">
            <Link className="link">
            <li>
              <button className="btn">
              <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
