import React from 'react';
import logo from './logo.svg';
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
    searchTerm: "t",
    filteredEmployees: []
  };

  componentDidMount() {
    for (var i = 0; i < 10; i++) {

      axios.get(`https://randomuser.me/api/?inc=gender,name,email,picture`)
        .then(res => {
          var employees = this.state.employees;
          // const tempEmp = res.data;
          const entry = res.data.results;
          employees.push(entry);
          this.setState({ employees });
          this.state.employees.length > 9 &&
          console.log("employees: ", this.state.employees);
          this.searchEmployees();
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
  }


  consEmp = () => {
    console.log("consEmp run");
    // console.log(JSON.stringify(this.state));
    console.log(this.state);

  }

  render() {
    // console.log(this.state.employees);
    return (
      <div className="App">
        <SiteHead />
        {/* <Navbar /> */}
        <ListHeader />
        {/* // the code below means the stuff in the p tag will only run once the array is longer than 0, ie has an entry. 
        // The previous problem of undefined was because of asynchronicity - this code was being run before the api call had data in the state. 
        // to traverse arrays of arrays use square brackets without periods. */}

        { // lets jsx know this is javascript


          

          // this.state.employees.sort(function(a, b) {
          //   return a.name.last.localeCompare(b.name.last);
          // }) && 

          this.state.employees.map((item, index) => (
            //When calling components they must be in <>
            //The component requires props, and these must all be passed in as indicated below.
            <Card
              image={this.state.employees[index][0].picture.large}
              first={this.state.employees[index][0].name.first}
              last={this.state.employees[index][0].name.last}
              title={this.state.employees[index][0].name.title}
              gender={this.state.employees[index][0].gender}
              email={this.state.employees[index][0].email}
            />

          ))
        }

      </div>
    );
  }

}


export default App;
