import React from "react";
import {useState} from 'react'


export default function RoutineCard({product, showProduct, reRender, handleSavedDelete, id}) {
      
function deleteProduct() {
    fetch(`http://localhost:9292/saved_products/${id}`,{
      method: 'DELETE'
    }).then(res=>res.json()).then(() => { 
      handleSavedDelete(id)
      reRender((render=>!render))
    }) 
    .catch(err => console.log(err))
  }
        return (
    
            <li onClick={((e) => showProduct(e, product))}>{product.name}
            <button style={{ background: 'transparent', border: 'none' }} onClick={deleteProduct}>X</button></li>
 
        )
    }
    
