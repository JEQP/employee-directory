import React from 'react';
import './App.css';
import axios from "axios";
import ListHeader from './components/ListHeader';
import SiteHead from './components/SiteHead';
import Loader from './components/Loader';


class App extends React.Component {

  state = {
    employees: [],
    searchTerm: "",
    filteredEmployees: [],
    filteredEmployessUpdated: false,
    loadBar: 0
  };

  componentDidMount() {
    for (var i = 0; i < 10; i++) {

      axios.get(`https://randomuser.me/api/?inc=gender,name,email,picture,dob,cell`)
        .then(res => {
          var employees = this.state.employees;
          // const tempEmp = res.data;
          const entry = res.data.results;
          employees.push(entry);
          let lb = (employees.length-1);
          this.setState({ loadBar: lb })
          this.setState({ employees });
          this.state.employees.length > 9 &&
            this.searchEmployees();
          console.log("employees: ", this.state.employees);
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
        <Loader loadBar = {this.state.loadBar}/>
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
