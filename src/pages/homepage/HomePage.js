import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { Calender } from "../../components/calender/Calender";
import "./styles.scss";

export const HomePage = React.memo(() => {
  const [selectedEmployee, setSelectedEmployee] = useState("")
  const  [employees, setEmployees] = useState([])
  const  [tours, setTours] = useState([])
  
  const handleOnChange = (value) => {
    setSelectedEmployee(value)
  }
  
  const getEmployees = useCallback(() => {
    axios.get('/employees')
    .then((response) => {
      let newEmployees = response.data.map(item => {
        return {
          value: item.id,
          text: item.name
        };
      })
      newEmployees.unshift({value:"", text:"All Employees"})
      setEmployees(newEmployees)      
    })
    .catch((error) => {      
      setEmployees([])
    })
  }, [])
  
  useEffect(() => {    
    getEmployees()        
  }, []) 

  const getTours = useCallback(() => {
    let url = '/tours';
    if(selectedEmployee !== ''){
      url += '/' + selectedEmployee
    }

    axios.get(url)
    .then((response) => {      
      setTours(response.data)
    })
    .catch(() => {      
      setTours([])
    })
  }, [selectedEmployee, employees]) 
  
  useEffect(() => {
    getTours()    
  }, [selectedEmployee, employees])
  
  return (
    <div>
        <Dropdown class="dropdown" label={'Employee: '} options={employees} onChange={handleOnChange}/>        
        <Calender tours={tours} employees={employees}/>
    </div>
  );
})