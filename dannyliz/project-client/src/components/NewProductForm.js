import React from "react";
import { useState } from 'react'


function NewProductForm({reRender, checkboxArray }) {



    let data = []


    function getData() {
        checkboxArray.forEach((chemical, index) => {
            data.push({
                p_id: index,
                p_name: chemical,
                isChecked: false
            })

        })
    }
    getData()


    const handleSubmit = () => {
        let chemicals = ""
        data.forEach((data) => {

            if (data.isChecked === true) {

                chemicals += `${data.p_name} ,`
            } else { console.log("i cry") }
        })
        let newProduct = {
            ...form,
            chemicals: chemicals
        };
        console.log(newProduct);
        fetch(`http://localhost:9292/saved_products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        }).then(
            reRender((render=>!render))
            )
    }

    const [form, setForm] = useState({
        name: "",
        brand: "",
        price: "",
        chemicals: ","
    })


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    console.log(form)

    return (
        <div className="App">
            <form>
                <div>
                    <input onChange={handleChange} value={form.name}
                        type="text" name="name" placeholder="Name" style ={{width: '100px'}}/>
                    <input onChange={handleChange} value={form.brand}
                        type="text" name="brand" placeholder="Brand" style ={{width: '100px'}}/>
                    <input onChange={handleChange} value={form.price}
                        type="text" name="price" placeholder="Price" style ={{width: '80px'}} />
                </div>
                <div style ={{alignContents: 'center'}}> 
                    <p>Select ingredients in your product!</p></div>
               
                {checkboxArray.map((li, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            name="chemicals"
                            value={li}
                            id={index}
                            checked={li.isChecked}
                            onChange={() => {                  
                                data[index].isChecked = !data[index].isChecked
                                console.log(data[index].isChecked)
                            }
                            }
                        />
                        <label htmlFor={li}>{li}</label>
                    </div>
                ))}
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

























// // Empty use state object in format used in db.
//   const [form, setForm] = useState({
//     id: "",
//     name: "",
//     description: "",
//     number: ""
//   })

// // Listens for change, duplicates object and populates with entered data.
//   const handleChange = (event) => {
//     setForm({
//       ...form,
//       [event.target.name]:event.target.value
//     })
//   }

// // On click, actually posts data to db and then resets form fields.
//   function handleSubmit(event) {
//     event.preventDefault()
//     fetch(`http://localhost:3000/contacts`,{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     }).then(
//     setForm({
//       id: "",
//       name: "",
//       description: "",
//       number: ""
//     }))
//   }

// // Displays new contact form and calls necessary functions, links back to home.
//   return (
//     <div className="box" style={{marginLeft: "646px", marginRight:"790px", width:"18%",  marginTop: "-40px", alignItems:'center'}}>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input onChange={handleChange} value={form.name} 
//               type="text" name="name" placeholder="Name" />
//           <input onChange={handleChange} value={form.description} 
//               type="text" name="description" placeholder="Description" />
//           <input onChange={handleChange} value={form.number} 
//               type="tel" maxlength="10" name="number" placeholder="Number" />
//         </div>
//         <button type="submit">
//           Add Contact
//         </button>
//       </form>
//       <nav>
//         <button>
//           <Link to='/'>Home</Link>
//         </button>
//       </nav>
//     </div>
//   );
// }

export default NewProductForm;
