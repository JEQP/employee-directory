import React from 'react';
import './App.css';
// import employees from "./employees.json";
import API from './utils/API';
import axios from "axios";
import Card from './components/Card';
import ListHeader from './components/ListHeader';
import Navbar from './components/Navbar';
import SiteHead from './components/SiteHead';


class App extends React.Component {

  state = {
    employees: [],
    searchTerm: "",
    filteredEmployees: [],
    filteredEmployessUpdated: false
  };

  componentDidMount() {
    for (var i = 0; i < 10; i++) {

      axios.get(`https://randomuser.me/api/?inc=gender,name,email,picture,dob,cell`)
        .then(res => {
          var employees = this.state.employees;
          // const tempEmp = res.data;
          const entry = res.data.results;
          employees.push(entry);
          this.setState({ employees });
          this.state.employees.length > 9 &&
          this.searchEmployees();
          // console.log("employees: ", this.state.employees);
        })
    }
  }

  searchEmployees = () => {
    this.setState({
      filteredEmployees: this.state.employees.filter((item) => {
        return item[0].name.first.includes(this.state.searchTerm) || item[0].name.last.includes(this.state.searchTerm);
      })
    });
    console.log("filteredList: ", this.state.filteredEmployees);
    this.setState({
      filteredEmployessUpdated: true
    })
    this.forceUpdate();
  }

  handleInputChange = event => {

    // Updating the input's state
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();
    this.setState({
      searchTerm: event.target.value
    })
    this.searchEmployees();

  };

  render() {

    return (
      <div className="App">
        <SiteHead />
        {/* <Navbar /> */}
        <form className="form">
          <input
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>

        {console.log("filteredEmployees in app: ", this.state.filteredEmployees)}
        {this.state.filteredEmployessUpdated &&
          <ListHeader empList={this.state.filteredEmployees} />
        }




      </div>
    );
  }
}

export default App;
