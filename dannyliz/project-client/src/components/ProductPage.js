import React from 'react'
import { useState, useEffect } from 'react'
import ProductList from './ProductList'
import Search from './Search'

export default function ProductPage() {

  // const [render, reRender] = useState(true)
  // const [products, setProducts] = useState([])

  const [search, setSearch] = useState('')
 


  // useEffect(() => {
  //     fetch(`database`)
  //         .then(res => res.json())
  //         .then(data => {
  //             setProducts(data)
  //         })
  // }, [render])
  // THIS IS PRETEND FETCHING DATA FROM SOMEWHERE

  return (
    <div className='routine-container'>
      <Search search={setSearch}/>  
      <ProductList/>
    <div className='routine-image'>Product Image Goes Here</div>
    </div>
  )
}