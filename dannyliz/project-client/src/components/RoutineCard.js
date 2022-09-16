import React from "react";
import {useState} from 'react'
import EditRoutine from './EditRoutine'


export default function RoutineCard({onUpdateRoutine, product, showProduct, reRender, handleSavedDelete, id}) {

    const [routineBody, setRoutineBody] = useState(product.name)
    let name = product.name;
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
        name=routineBody;
        onUpdateRoutine(updatedRoutine);
      }
    
    return (
      <li>
          {/* <span className="time">{timestamp}</span> */}
          {isEditing ? (
            <EditRoutine
            reRender={reRender}
            routineBody={routineBody}
            setRoutineBody={setRoutineBody}
            onUpdateRoutine={handleUpdateRoutine}
            id={product.id}
            />
          ) : (
            <p onClick={((e) => showProduct(e, product))}>{product.name}</p>
            )}
             <div className="actions">
              <button onClick={() => setIsEditing((isEditing) => !isEditing)} style={{ background: 'transparent', border: 'none' }}>
                <span role="img" aria-label="edit" >
                  ✏️
                </span>
              </button>
              <button onClick={deleteProduct} style={{ background: 'transparent', border: 'none' }}>
                <span role="img" aria-label="delete">
                  🗑
                </span>
              </button>
            </div>
        </li>
      );
    
}