import React from "react";
import {useState} from 'react'
import EditRoutine from './EditRoutine'


export default function RoutineCard({onUpdateRoutine, product, showProduct, reRender, handleSavedDelete, id}) {

   
  const {name, price, brand, chemicals} = product;
  const [isEditing, setIsEditing] = useState(false);

function deleteProduct() {
    fetch(`http://localhost:9292/saved_products/${id}`,{
      method: 'DELETE'
    }).then(res=>res.json()).then(() => { 
      handleSavedDelete(id)
      reRender((render=>!render))
    }) 
    .catch(err => console.log(err))

    }

    function handleUpdateRoutine(updatedRoutine){
        setIsEditing(false);
        onUpdateRoutine(updatedRoutine);
      }
    
    return (
      <li>
          <span className="user">{product.name}</span>
          {/* <span className="time">{timestamp}</span> */}
          {isEditing ? (
            <EditRoutine
            name={name}
            brand={brand}
            chemicals={chemicals}
            price={price}
            onUpdateRoutine={handleUpdateRoutine}
            />
          ) : (
            <p>{product.name}</p>
            )}
             <div className="actions">
              <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                <span role="img" aria-label="edit">
                  ✏️
                </span>
              </button>
              <button onClick={deleteProduct}>
                <span role="img" aria-label="delete">
                  🗑
                </span>
              </button>
            </div>
    
        </li>
      );
    
}