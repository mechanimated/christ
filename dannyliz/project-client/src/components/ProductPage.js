import React from 'react'
import { useState, useEffect } from 'react'
import ProductList from './ProductList'
import Search from './Search'
import NewProductForm from './NewProductForm'
import NewProductDropdown from './NewProductDropdown.js'

export default function ProductPage() {

  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [render, reRender] = useState(true)

  useEffect(() => {
      fetch(`http://localhost:9292/products`)
          .then(res => res.json())
          .then(data => {
              setProducts(data)
          })
  }, [render])

  let list = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Search search={setSearch}/>  

      <ProductList products={list} reRender={reRender}/>
      
    </div>
  )
}