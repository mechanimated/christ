import React from 'react'
import { useState, useEffect } from 'react'
import RoutineList from './RoutineList'
import RoutineSearch from './RoutineSearch'


export default function RoutinePage() {

  const [search, setSearch] = useState('')
  const [savedProducts, setSavedProducts] = useState([])
  const [render, reRender] = useState(true)

  useEffect(() => {
      fetch(`http://localhost:9292/saved_products`)
          .then(res => res.json())
          .then(data => {
              setSavedProducts(data)
          })
  }, [render])
  
  function handleSavedDelete(id) {
    const newSavedProducts = savedProducts.filter((product) => product.id !== id)
    setSavedProducts(newSavedProducts)
}

  let list = savedProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <RoutineSearch search={setSearch}/>  

      <RoutineList reRender={reRender} handleSavedDelete={handleSavedDelete} savedProducts={list} />
      
    </div>
  )
}