import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { Calender } from "../../components/calender/Calender";
import "./styles.scss";

export const HomePage = () => {
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
      console.log(error)
      setEmployees([])
    })
  }, [])
  
  useEffect(() => {
    getEmployees()
  }, [getEmployees]) 

  const getTours = useCallback(() => {
    let url = '/tours';
    if(selectedEmployee !== ''){
      url += '/' + selectedEmployee
    }

    axios.get(url)
    .then((response) => {      
      setTours(response.data)
    })
    .catch((error) => {
      console.log(error)
      setTours([])
    })
  }, []) 
  
  useEffect(() => {
    getTours();
  }, [selectedEmployee])
  
  return (
    <div>
        <Dropdown label={'Employee: '} options={employees} onChange={handleOnChange}/>
        <p>Selected Employee: {selectedEmployee}</p>
        <Calender tours={tours}/>
    </div>
  );
}