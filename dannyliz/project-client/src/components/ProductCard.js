import React from "react";
import {useState} from 'react'


export default function ProductCard(product, showProduct, reRender) {

    
    function saveProduct(event) {
        fetch('http://localhost:9292/routines' ,{
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
        id: "",
        name: product.name, 
        brand: product.brans, 
        price: product.price, 
        chemicals: product.chemicals
    })
 
    return (

                <li>{product.product.name}<button onClick={((event) => showProduct(event, product))}>🔍</button>
                <button onClick={((event) => saveProduct(event, product))}>💾</button></li>


    )
}
