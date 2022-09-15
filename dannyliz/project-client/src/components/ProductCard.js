import React from "react";
import {useState} from 'react'


export default function ProductCard({product, showProduct, reRender}) {

    
    function saveProduct(event) {
        fetch('http://localhost:9292/saved_products' ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(saved),
        }).then(
        reRender((render=>!render))
        )
    }

    const [saved, setSaved] = useState ({
        id: '',
        name: product.name, 
        brand: product.brand, 
        price: product.price, 
        chemicals: product.chemicals
    })
 
    return (

        <li onClick={((e) => showProduct(e, product))}>{product.name}
        <button onClick={((e) => saveProduct(e, product))}>💾</button></li>


    )
}
