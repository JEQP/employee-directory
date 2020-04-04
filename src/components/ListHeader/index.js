import React from "react";
import "./style.css";
import Card from '../Card';

class ListHeader extends React.Component {

    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    sortName = () => {
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
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
        let sortEmp = [];
        if (this.state.ascending) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.dob.age, nameB = b.dob.age;
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.dob.age, nameB = b.dob.age;
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            ascending: !this.state.ascending,
            sortedEmployees: sortEmp

        })
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

                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (

                            <Card
                                image={item.picture.large}
                                first={item.name.first}
                                last={item.name.last}
                                title={item.name.title}
                                gender={item.gender}
                                age={item.dob.age}
                                phone={item.cell}
                                email={item.email}
                            />
                    ))
                }
            </div>
        );
    }
}

export default ListHeader;