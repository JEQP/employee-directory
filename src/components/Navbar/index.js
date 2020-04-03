// import React from "react";
// import "./style.css";

// class Navbar extends React.Component {

//     state = {
//         searchTerm: "search"
//     };

    // handleInputChange = event => {
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value } = event.target;
    
    //     // Updating the input's state
    //     this.setState({
    //       [name]: value
    //     });
    //   };

    //   handleFormSubmit = event => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();
    //     alert(`This will run a search function`);

    //     const result = words.filter(word => word.length > 6);
    //     // this.setState({
    //     //   searchTerm
    //     // });
    //   };


//     render() {
//         return (
//             <div>
                // <form className="form">
                //     <input
                //         value={this.state.searchTerm}
                //         name="searchTerm"
                //         onChange={this.handleInputChange}
                //         type="text"
                //         placeholder="Search"
                //     />

                //     <button onClick={this.handleFormSubmit}>Submit</button>
                // </form>
//             </div>

//         );
//     }
// }

// export default Navbar;