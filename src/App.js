import React from "react";
import axios from "axios";
import "./styles.scss";

export default class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios.get('/employees').then((response) => {
      this.setState({ employees: response.data });
    }); 
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <ul className="employees">
          {employees.map((employee) => (
            <li className="employee">
               <p>
                <strong>Id:</strong> {employee.id}
              </p>
              <p>
                <strong>Name:</strong> {employee.name}
              </p>              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}