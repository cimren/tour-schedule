import React from "react";
import axios from "axios";
import "./styles.scss";

function App() {
  let [employees, setEmployees] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios.get('/employees')
    .then((response) => {
      setEmployees(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
        <ul className="employees">
          {employees && employees.map((employee) => (
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
export default App;