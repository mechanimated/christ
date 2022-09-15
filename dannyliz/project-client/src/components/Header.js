import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom"
// import App from "../App";

import React from 'react'

export default function Header() {
  return (
    <div>
        <Link classname="nav-links" to="*"><h1><em>Skinteractions</em></h1></Link>
        <Link classname="nav-links" to="/viewroutines">View Routines</Link>
        <Link classname="nav-Links" to="/upload">Upload A Routine</Link>
        {/* <Link classname="nav-links" to" */}
    </div>
  )
}
