import React from "react";
import {useState} from 'react'


export default function ProductCard(product, saveProduct, showProduct) {

    
//   function saveProduct(event) {
//     fetch('product database',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(fave),
//     }).then(
//       reRender((render=>!render))
//     )
//   }
// PRETENDS TO SAVE FROM DB

    // const [add, setAdd] = useState({
    //     id: "",
    //     name: "", 
    //     brand: "", 
    //     price: "", 
    //     chemicals: ""
    // })
// ONE DAY FOR ADDING UR OWN PRODUCTS
  return (
   <div className='routine-container'>
        <div className= 'routine-list-container'>List of Products
            <ul className={'routinelist'}>
                <li className='product'>TESTING<button onClick={((e) => showProduct(e, product))}>🔍</button>
                <button onClick={((e) => saveProduct(e, product))}>💾</button></li>
            </ul>
        </div>
    </div>
  )
}


