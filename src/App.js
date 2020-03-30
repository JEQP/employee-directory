import React from 'react';
import logo from './logo.svg';
import './App.css';
// import employees from "./employees.json";
import API from './utils/API'
import axios from "axios";


class App extends React.Component {

  state = {
    employees: []
  };

  componentDidMount() {
    for (var i=0; i<10; i++){

    axios.get(`https://randomuser.me/api/?inc=gender,name,email,picture`)
      .then(res => {
        var employees = this.state.employees;
        // const tempEmp = res.data;
        const entry = res.data.results;
        employees.push(entry);
        this.setState({ employees });
        this.consEmp();
      })
    }
  }

  

  consEmp = () => {
    console.log("consEmp run");
    // console.log(JSON.stringify(this.state));
    console.log(this.state);

  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
<p></p>
    </div>
  );
}

}


export default App;
