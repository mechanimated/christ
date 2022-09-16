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
let chemTypeCheck = []

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


  function getChemType() {

    ingredients.forEach((product) => {
      chemTypeArray.push(product.name)
      chemTypeArray = chemTypeArray.map((e) => {
        return e.split(', ')
      }).flat()   
      
    chemTypeArray.forEach((chemType) => {

      if(chemArray.includes(product.name)) {

        if(chemTypeCheck.indexOf(product.chem_type) === -1) {
          chemTypeCheck.push(product.chem_type);
        }

      } else { }
    })
    })
    return chemTypeArray
  }

  getChemType()

let message = []

function alertMe() {
 if(chemTypeCheck.includes("vitamin B3") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('bad ret')
 } else {}
 if(chemTypeCheck.includes("vitamin C") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('bad C no work')
 } else {}
 if(chemTypeCheck.includes("phenol") && chemTypeCheck.includes("peroxide")) {
  message.push('bad bleach')
 } else {}

 if(chemTypeCheck.includes("beta-hydroxy acid") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('bad dry')
 } else {}

 if(chemTypeCheck.includes("peroxide") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('bad dry')
 } else {}

 if(chemTypeCheck.includes("vitamin C") && chemTypeCheck.includes("peroxide")) {
  message.push('bad C no work')
 } else {}

 if(chemTypeCheck.includes("vitamin B3") && chemTypeCheck.includes("beta-hydroxy acid")) {
  message.push('bad ret 2 electric boogaloo')
 } else {}

 if(chemTypeCheck.includes("silicone")) {
  message.push('careful order')
 } else {}
 if(!chemTypeCheck.includes("salicylate") && !chemTypeCheck.includes("dibenzoylmethane") && !chemTypeCheck.includes("cyanocinnamic ester")) {
  message.push('no sunscreen')
 } else {}

}
alertMe() 



  return (
    <div>
      <RoutineSearch search={setSearch}/> 
      <div> <h3> {message}</h3></div> 
      <RoutineList reRender={reRender} handleSavedDelete={handleSavedDelete} savedProducts={list} />
      
    </div>
  )
}