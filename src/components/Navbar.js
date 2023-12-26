import React from "react"; // optional
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {  // props fetched by App.js
  return (
    <>
      <nav id="navbar" className={`navbar py-3 mt-lg-0 mt-3 navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid flex-nowrap">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <div className="navbar-collapse d-flex">
            <ul className="navbar-nav flex-row me-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-sm-2 px-1" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-sm-2 px-1" to="/about">About</Link>
              </li>
            </ul>
            <div className="d-flex">
              <button onClick={props.toggleTitle} className={`btn btn-success me-2 d-sm-block d-none`}  disabled={props.alert == null ? false:true} >Toggle Title</button>
              <button id="mode-btn" onClick={props.toggleMode} className={`btn btn-${(props.mode =="light")?"dark":"light"}`}  disabled={props.alert == null ? false:true}> {props.modeName} </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {        // This 'propTypes' must be in camel case otherwise you'll get error
  title: PropTypes.string   // this ensures that value of 'title' prop must be a string
};

Navbar.defaultProps = {
  title: "Text Editor"        // default props setting
};

export default Navbar;