import React from 'react'
import { useState, useEffect } from 'react'
import RoutineList from './RoutineList'
import RoutineSearch from './RoutineSearch'


export default function RoutinePage() {

  const [search, setSearch] = useState('')
  const [savedProducts, setSavedProducts] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [render, reRender] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:9292/ingredients`)
        .then(res => res.json())
        .then(data => {
            setIngredients(data)
        })
}, [render])

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


   
//   temp1.map((e) => {
//     return e.split(', ')
// }).flat()
let chemArray = []
let chemTypeArray = []

  function getChem(){


      list.forEach((product) => {
        chemArray.push(product.chemicals)
        chemArray = chemArray.map((e) => {
          return e.split(', ')
        }).flat()   
      })
 
      return chemArray
    }
  
  getChem()

  
let chemTypeCheck = []
let i =0

  function getChemType() {

    ingredients.forEach((product) => {
      chemTypeArray.push(product.name)
      chemTypeArray = chemTypeArray.map((e) => {
        return e.split(', ')
      }).flat()   
     
    chemTypeArray.forEach((chemType) => {
      // console.log(product.chem_type)
      // console.log(chemArray)
      if(chemType === chemArray[i]) {
        chemTypeCheck.push(product.chem_type)
        // console.log(chemTypeCheck)
        i++
      } else { i++}
    })
    })


    return chemTypeArray
  }
  
  getChemType()
console.log(ingredients.chem_type)


// pull list chemicals
  //split
  //compare to name
  //use name to find chem_type
  // switch case compare

  return (
    <div>
      <RoutineSearch search={setSearch}/>  

      <RoutineList reRender={reRender} handleSavedDelete={handleSavedDelete} savedProducts={list} />
      
    </div>
  )
}