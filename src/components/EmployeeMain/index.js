import React, { Component } from "react";

import EmployeeTable from "../EmployeeTable/EmployeeTable";
import SearchInput from "../SearchInput/SearchInput";
import API from "../utils/API";

class EmployeeMain extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    sortDir: this.sortDirectory,
  };

  get sortDirectory() {
    return {
      name: "",
      email:"",
      phone: "",
      dob:""
    };
  }

  componentDidMount() {
    API.searchEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployeesData(value.toLowerCase().trim());
  };

  filterEmployeesData = (data) => {
    if (data) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(data) ||
            employee.phone.includes(data) ||
            employee.phone.replace(/[^\w\s]/gi, "").includes(data) ||
            employee.email.includes(data) ||
            this.formatDate(employee.dob.date).includes(data)
          );
        }),
      });
    } else {
      this.setState({ filteredEmployees: this.state.employees });
    }
  };

  sortBy = (key, primary = 0, secondary = 0) => {
    let sortedStaff = this.state.filteredEmployees;
    if (this.state.sortDir[key]) {
      this.setState({
        filteredEmployees: sortedStaff.reverse(),
        sortDir: {
          ...this.sortDirectory,
          [key]: this.state.sortDir[key] === "asc" ? "desc" : "asc",
        },
      });
    } else {
      sortedStaff = this.state.filteredEmployees.sort((a, b) => {
        a = a[key];
        b = b[key];


        if (primary) {
          if (secondary && a[primary] === b[primary]) {
            return a[secondary].localeCompare(b[secondary]);
          }
          return a[primary].localeCompare(b[primary]);
        } else {
          return a.localeCompare(b);
        }
      });

      this.setState({
        filteredEmployees: sortedStaff,
        sortDir: { ...this.sortDirectory, [key]: "asc" },
      });
    }
  };

  formatDate = (date) => {
    date = new Date(date);
    let dob = [];
    dob.push(("0" + (date.getMonth() + 1)).slice(-2));
    dob.push(("0" + date.getDate()).slice(-2));
    dob.push(date.getFullYear());

    return dob.join("/");
  };

  render() {
    return (
      <>
        <SearchInput
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container mt">
          <EmployeeTable
            state={this.state}
            sortBy={this.sortBy}
            filteredEmployees={this.filterEmployeesData}
            formatDate={this.formatDate}
          />
        </div>
      </>
    );
  }
}

export default EmployeeMain;