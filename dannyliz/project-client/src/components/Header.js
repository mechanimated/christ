import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom"
// import App from "../App";

import React from 'react'

export default function Header() {
  return (
    <div className='header-div' style={{ 
      backgroundPosition: '40% 50%',
      minHeight: '150px'

  }}>
        
        <Link classname="nav-links" to="/home"><h1 className='header'>Skinteractions</h1></Link>
        <div style={{
          paddingLeft: '125px',
          marginTop: '39px'
        }}>
        <Link classname="nav-links" to="/viewroutines"><h2 className='nav-links'>My Routine</h2></Link>
        </div>
        <br></br>
        <div style={{
          paddingLeft: '238px',
          marginTop: '65px'
        }}>
        <Link classname="nav-links" to="/upload"><h2 className='nav-links'>Products</h2></Link>
        </div>
        {/* <Link classname="nav-links" to" */}
    </div>
  )
}