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
        <h1 className='header'>Skinteractions</h1>
        <div style={{
          paddingLeft: '125px',
          marginTop: '39px'
        }}>
        <Link className="nav-links" to="/upload"> My Routine</Link>
        </div>
        <br></br>
        <div style={{
          paddingLeft: '243px',
          marginTop: '71px'
        }}>
        <Link className="nav-links" to="*">Home</Link>
        </div>
        {/* <Link classname="nav-links" to" */}
    </div>
  )
}