import React from 'react'
import {useState} from "react"
import RoutineCard from "./RoutineCard";
import NewProductForm from './NewProductForm'

export default function RoutineList({reRender, savedProducts, handleSavedDelete, checkboxArray}) {

    const [details, setDetails] = useState([])

    function showProduct(event, product) {
    setDetails(product)
    }
    
    return (
    <div className='routine-container'>
        <div className= 'routine-list-container'>  My Skincare Routine
            <ul className={'routinelist'}>
                {savedProducts?.map((product, buttcheeks) => {
                return ( 
                <RoutineCard reRender={reRender} product={product}  
                id={product.id} key={buttcheeks} showProduct={showProduct}
                handleSavedDelete={handleSavedDelete} />
                )})}
            </ul>
            <div className='routine-image'>About Your Product
        <ul className={'productlist'}>
                <li><h5>{details.brand}</h5></li>
                <li><h5>{details.price}</h5></li> 
            </ul>
        
        </div>
        </div>
        <div className='form'>
        <NewProductForm reRender={reRender}  checkboxArray={checkboxArray}/>
        </div>
        <br/>
    </div>
  )
}