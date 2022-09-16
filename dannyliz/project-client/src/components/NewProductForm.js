import React from "react";
import {useState} from 'react'


// Function for posting new data to db.
function NewProductForm({checkboxArray}) {



let data = []


  function getData() { 
    checkboxArray.forEach((chemical, index) => {
        data.push({
            p_id: index,
            p_name: chemical,
            isChecked: false
        })

    })}
    getData()

//  console.log(data)


    // const [dataForm, setDataForm] = useState(data);

    // const [newChems, setNewChems] = useState(data);
  
    let newChems = []
    // const changeCheck = (x) => {
    //     console.log(x)
    //     // if(x.isChecked === true)
    //     newChems.push(x);
    // };
  
    const handleSubmit = () => {
        let chemicals = ""
        data.forEach((data) => {

            if(data.isChecked === true) {
                
                chemicals += `${data.p_name} ,`
            } else { console.log("i cry")}
        })
        console.log({name:"",brand:"",price:"",chemicals:chemicals});
        // fetch(`http://localhost:9292/saved_products`,{
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(data),
        // }).then(
        // console.log("posted"))
                ///POST NEW ENTRY
            }

    

 
    
    return (
      <div className="App">
        <form>
            {/* more fields */}
          {checkboxArray.map((li, index) => (
            <div key={index}>
              <input
                type="checkbox"
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
