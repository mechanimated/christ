import React from 'react'
import {useState} from "react"
import RoutineCard from "./RoutineCard";

export default function RoutineList({reRender, savedProducts, handleSavedDelete, }) {

    const [details, setDetails] = useState([])

    function showProduct(event, product) {
    setDetails(product)
    }
    
    return (
    <div className='routine-container'>
        <div className= 'routine-list-container'>List of Products
            <ul className={'routinelist'}>
                {savedProducts?.map((product, buttcheeks) => {
                return ( 
                <RoutineCard reRender={reRender} product={product}  
                id={product.id} key={buttcheeks} showProduct={showProduct}
                handleSavedDelete={handleSavedDelete} />
                )})}
            </ul>
        </div><br/>


        {/* <div className= 'routine-list-container div2'>
        <div className='routine-image'>Product Image Goes Here, eventually
        <ul className={'routinelist'}>
                <li><h3>{details.name}</h3></li>
                <li><h5>{details.brand}</h5></li>
                <li><h5>{details.price}</h5></li> 
            </ul>
        
        </div>
        </div> */}
    </div>
  )
}