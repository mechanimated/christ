// import React, { Component } from "react";
// import { default as ReactSelect } from "react-select";
// import { components } from "react-select";

// const Option = (props) => {
    
//   return (
//     <div>
//       <components.Option {...props}>
//         <input
//           type="checkbox"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{" "}
//         <label>{props.label}</label>
//       </components.Option>
//     </div>
//   );
  
// };



// export default class Example extends Component {
    
    
//   constructor(props) {
//     super(props);
//     this.state = {
//       optionSelected: null
//     };
//   }

//   handleChange = (selected) => {
//     this.setState({
//       optionSelected: selected
//     });
//   };

//   render() {
//     const colourOptions = [
//         { value: "ocean1", label: "Ocean" },
//         { value: "blue", label: "Blue" },
//         { value: "purple", label: "Purple" },
//         { value: "red", label: "Red" },
//         { value: "orange", label: "Orange" },
//         { value: "yellow", label: "Yellow" },
//         { value: "green", label: "Green" },
//         { value: "forest", label: "Forest" },
//         { value: "slate", label: "Slate" },
//         { value: "silver", label: "Silver" }
//       ];
//     return (
//       <span
//         className="d-inline-block"
//         data-toggle="popover"
//         data-trigger="focus"
//         data-content="Please selecet account(s)"
//       >
//         <ReactSelect
//           options={colourOptions}
//           isMulti
//           closeMenuOnSelect={false}
//           hideSelectedOptions={false}
//           components={{
//             Option
//           }}
//           onChange={this.handleChange}
//           allowSelectAll={true}
//           value={this.state.optionSelected}
//         />
//       </span>
//     );
//   }
// }





