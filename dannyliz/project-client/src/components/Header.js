import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom"
// import App from "../App";

import React from 'react'

export default function Header() {
  return (
    <div>
        <h1><em>Skinteractions</em></h1>
        <Link classname="nav-links" to="*">Home</Link>
        <Link classname="nav-Links" to="/upload">Upload A Routine</Link>
        {/* <Link classname="nav-links" to" */}
    </div>
  )
}
