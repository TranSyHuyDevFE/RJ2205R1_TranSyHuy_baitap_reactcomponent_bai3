import React, { Component } from "react";

class StudentInfoComponent extends Component {
  state = {
    arrListStudent: [
      {
        Id: "1",
        Name: "Nguyen Van A",
        Age: "18",
        Address: "VietNam",
      },
      {
        Id: "2",
        Name: "Nguyen Van B",
        Age: "19",
        Address: "USA",
      },
    ],
  };
  render() {
    return (
      <div className="table-info">
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>

            {this.state.arrListStudent.map((item, index) => {
              return (
                <tr key={item.Id}>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentInfoComponent;
