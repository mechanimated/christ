import React, { useState } from "react";

function EditRoutine({ id, body, onUpdateRoutine, product }) {
  const [routineBody, setRoutineBody] = useState(body);
//   const [brandBody, setBrandBody] = useState(product.name)

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/saved_products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body:routineBody

      }),
    })
      .then((r) => r.json())
      .then((updatedRoutine) => onUpdateRoutine(updatedRoutine));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={routineBody}
        onChange={(e) => setRoutineBody(e.target.value)}
      />
      <input type="submit" value="Save" />
      {console.log()}
    </form>
  );
}

export default EditRoutine;