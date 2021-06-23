import React from "react";

const EmployeeTable = (props) => {
  return (
    <table className="table table-dark table-striped table-hover text-center table-sortable">
      <thead>
        <tr>
          <th scope="col">Image</th>
          
          <th scope="col" data-name="name" data-sortable="true">
            <span onClick={() => props.sortBy("name", "last", "first")}>
              Name
            </span>
          </th>
          <th scope = "col"><span onClick ={() => props.sortBy("email")}>Email</span></th>

          <th scope="col"><span onClick={() => props.sortBy("phone")}>Phone</span></th>


          <th scope ="col"><span onClick ={() => props.sortBy("dob","date")}>Date of Birth</span></th>
        </tr>
      </thead>


      <tbody>
        {props.state.filteredEmployees.map((employee) => {
          const {first, last} = employee.name;
          const fullName = `${first} ${last}`;

          const dob= props.formatDate(employee.dob.date)

          return (
            <tr key ={employee.login.uuid}>
              <td>
                <img src = {employee.picture.thumbnail} alt={fullName}/>
              </td>
              <td className ="align-middle">{fullName}</td>
              <td className = "align-middle email">
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td className ="align-middle">
                <a href={`tel:+1${employee.phone}`}>{employee.phone}</a>
              </td>
              
              <td className ='align-middle'>{dob}</td>
              </tr>  
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;