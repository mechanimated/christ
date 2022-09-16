import React from 'react'
import { useState, useEffect } from 'react'
import RoutineList from './RoutineList'
import RoutineSearch from './RoutineSearch'
import NewProductForm from './NewProductForm'


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


let chemArray = []
let chemTypeArray = []
let chemTypeCheck = []
let checkboxArray= []
let message = []

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
      checkboxArray = chemTypeArray
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


function alertMe() {
 if(chemTypeCheck.includes("vitamin B3") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('Retinols and AHAs should not be used together! ')
 } else {}
 if(chemTypeCheck.includes("vitamin C") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('Try to use Vitamin C and other acids at different times of day. ')
 } else {}
 if(chemTypeCheck.includes("phenol") && chemTypeCheck.includes("peroxide")) {
  message.push('Dark spot treatments and peroxides can bleach your skin! ')
 } else {}

 if(chemTypeCheck.includes("beta-hydroxy acid") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('AHAs and BHAs can dry out skin. Be sure to moisturize after use. ')
 } else {}

 if(chemTypeCheck.includes("peroxide") && chemTypeCheck.includes("alpha-hydroxy acid")) {
  message.push('Peroxides and AHAs can cause dry, flaky skin. ')
 } else {}

 if(chemTypeCheck.includes("vitamin C") && chemTypeCheck.includes("peroxide")) {
  message.push('Vitamin C and peroxide neutralize each other. Best not to use them together. ')
 } else {}

 if(chemTypeCheck.includes("vitamin B3") && chemTypeCheck.includes("beta-hydroxy acid")) {
  message.push('Retinols and BHAs can irritate and redden the skin. ')
 } else {}

 if(chemTypeCheck.includes("silicone")) {
  message.push('Make sure you use products containing silicone last in your routine. ')
 } else {}
 if(!chemTypeCheck.includes("salicylate") && !chemTypeCheck.includes("dibenzoylmethane") && !chemTypeCheck.includes("cyanocinnamic ester")) {
  message.push('Your skincare routine does not include sunscreen! Consider adding some. ')
 } else {}

}
alertMe() 


  return (
    <div>
      <RoutineSearch search={setSearch}/> 
      <div className='message'> {message}</div> 
      <RoutineList checkboxArray={checkboxArray} reRender={reRender} handleSavedDelete={handleSavedDelete} savedProducts={list} />
      
      
    </div>
  )
}