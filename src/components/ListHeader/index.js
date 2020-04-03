import React from "react";
import "./style.css";
import Card from '../Card';

class ListHeader extends React.Component {

    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: []
    }

    sortName = () => {
        console.log("sortName run", this.props.empList);
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a[0].name.last.toLowerCase(), nameB = b[0].name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a[0].name.last.toLowerCase(), nameB = b[0].name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmp

        })
    }

    sortAge = () => {
        console.log("sortAge run", this.props.empList);
        let sortEmp = [];
        if (this.state.ascending) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a[0].dob.age, nameB = b[0].dob.age;
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a[0].dob.age, nameB = b[0].dob.age;
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            ascending: !this.state.alphabetical,
            sortedEmployees: sortEmp

        })
    }

    fillList = () => {
        // console.log("fillList run: ", this.props.empList);
        // console.log("sortedEmployees ", this.state.sortedEmployees);
        // console.log("sortedEmp length", this.state.sortedEmployees.length);
        if (this.state.sortedEmployees.length === 0) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }

    }



    render() {
        return (

            <div>
                <div className="header">
                    <div>Photo</div>
                    <div><p onClick={this.sortName} className="name">Name</p> </div>
                    <div>Gender</div>
                    <div><p onClick={this.sortAge} className="age">Age</p></div>
                    <div>Phone</div>
                    <div>E-mail</div>
                </div>
                {this.fillList()}
                {console.log("sortedEmployees after fillList ", this.state.sortedEmployees)}
                { // lets jsx know this is javascript
                    this.state.sortedEmployees.map((item, index) => (
                        //When calling components they must be in <>
                        //The component requires props, and these must all be passed in as indicated below.
                        <Card
                            image={this.state.sortedEmployees[index][0].picture.large}
                            first={this.state.sortedEmployees[index][0].name.first}
                            last={this.state.sortedEmployees[index][0].name.last}
                            title={this.state.sortedEmployees[index][0].name.title}
                            gender={this.state.sortedEmployees[index][0].gender}
                            age={this.state.sortedEmployees[index][0].dob.age}
                            phone={this.state.sortedEmployees[index][0].cell}
                            email={this.state.sortedEmployees[index][0].email}
                        />

                    ))
                }
            </div>
        );
    }
}

export default ListHeader;