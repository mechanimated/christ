import React from 'react'
import {useState} from "react"
import ProductCard from "./ProductCard";

export default function ProductList(products) {



    const [details, setDetails] = useState([])

  function showProduct(event, product) {
   setDetails(product)
  }
  return (
    <div className='routine-container'>
        <div className= 'routine-list-container'>List of Products
            <ul className={'routinelist'}>
                <li><h3>{details.name}name</h3></li>
            </ul>
        </div><br/>
        <div className= 'routine-list-container'>
        <div className='routine-image'>Product Image Goes Here, eventually
        <ul className={'routinelist'}>
                <li><h3>{details.name}name</h3></li>
                <li><h5>{details.brand}brand</h5></li>
            </ul>
            <img src='https://byoma.com/wp-content/uploads/2022/01/Clarifying-Serum-Lifestyle.jpg' alt='gay'/>
                <li><h5>{details.price}price</h5></li>
        </div>
        </div>
    </div>
  )
}