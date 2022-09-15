import React from 'react'
import {useState} from "react"
import ProductCard from "./ProductCard";

export default function ProductList({reRender, products}) {

    const [details, setDetails] = useState([])

    function showProduct(event, product) {
    setDetails(product)
    }
console.log(products)
    
    return (
    <div className='routine-container'>
        <div className= 'routine-list-container'>List of Products
            <ul className={'routinelist'}>
                {products?.map((product, buttcheeks) => {
                return ( 
                <ProductCard reRender={reRender} product={product}  
                id={product.id} key={buttcheeks} showProduct={showProduct} />
                )})}
            </ul>
        </div><br/>


        <div className= 'routine-list-container div2'>
        <div className='routine-image'>Product Image Goes Here, eventually
        <ul className={'routinelist'}>
                <li><h3>{details.name}</h3></li>
                <li><h5>{details.brand}</h5></li>
                <li><h5>{details.price}</h5></li> 
            </ul>
            {/* <img src='https://byoma.com/wp-content/uploads/2022/01/Clarifying-Serum-Lifestyle.jpg' alt='gay'/>
                */}
        </div>
        </div>
    </div>
  )
}