import React from "react";
import PropTypes from 'prop-types';
import "./calender.scss";

export const Calender = ({tours, employees}) => {
  const colors = ['#7bc74d', '#7cd2e3', '#d46a6a', '#f9f871', '#b0a8b9', '#ff8066'],
        days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        DAYS_OF_WEEK = days.length,
        HOUR_IN_SEC = 3600, // Hour in seconds
        CALENDER_START_TIME = 9 * HOUR_IN_SEC, // Calender starts from 9
        MAX_TIME_SLOT = 8 //From 9 to 17               

  //sort the tours array in order to place faster into the calender 
  tours.sort((a, b) => {return a.startTime - b.startTime || a.day - b.day})       

  const createTable = () => {
    let table = []
    for(let i=0; i<MAX_TIME_SLOT + 1; i++){
      let tableRow = [],
          hourlyTours = getHourlyTours(i) //get all tours for each time slot(e.g 9:00-10:00)
      for(let j=0; j<DAYS_OF_WEEK + 1; j++){
        let timeSlot = (CALENDER_START_TIME + i*HOUR_IN_SEC) / HOUR_IN_SEC,
            scheduledTours = hourlyTours.filter(item => item.day === j-1) 

        tableRow.push(j === 0 ? <td key={i+','+j}>{timeSlot}:00</td> 
          : <td>{scheduledTours.length ? createEmployeeBoxes(scheduledTours) : ''}</td>)
      }
      table.push(<tr>{tableRow}</tr>)
    }

    return table;
  }

  const getHourlyTours = (rowIndex) => {
    let hourlyTours = []
    if(tours.length){
      let tour = tours[0]
      const timeMin = CALENDER_START_TIME + rowIndex*HOUR_IN_SEC,
            timeMax = timeMin + HOUR_IN_SEC
                  
      while(tour && tour.startTime < timeMax){   
        tour.position = (tour.startTime - timeMin) / HOUR_IN_SEC     
        hourlyTours.push(tour)
        tours.shift()           
        tour = tours.length ? tours[0] : null
      }
    }

    return hourlyTours;    
  }

  const createTableHeader = () => {
    let header = [<th />]        
       
    days.forEach((day, index) => {
      header.push(<th key={index}>{day}</th>)
    }) 

    return <tr>{header}</tr>
  }

  const createEmployeeBoxes = (scheduledTours) => {
    let employeeBoxes = [],
        length = scheduledTours.length        
    
    if(length > 2){
      length = 2
    }        
    
    scheduledTours.forEach((scheduledTour, index)=>{
      let {id, duration, position} = scheduledTour   
      const {name, color} = getEmployeeInfo(id)         
      
      if(duration && index < length){        
        const boxPosition = position * 60
        const boxWidth = 100 / length
        const boxStyle = {          
          width: boxWidth + '%',
          backgroundColor: color,
          marginTop: boxPosition + 'px'
        }          
        employeeBoxes.push( <div className="employee-box" style={boxStyle}>{name}</div> )
      }        
    })       
        
    return employeeBoxes
  } 

  const getEmployeeInfo = (id) => {
    let index = employees.findIndex(employee => employee.value == id)
    const employee = index > 0 && employees[index]    
    if(index >= colors.length){
      index = 0;
    }
    return {
      name: employee ? employee.text : 'Unnamed Employee',
      color: colors[index] 
    }    
  }  

  return (
    <div className="calender">     
      <table>
        <thead>
          {
            createTableHeader()
          }
        </thead>
        <tbody>    
          {
            createTable()
          }                         
        </tbody>
      </table>              
    </div>
  );
}

Calender.propTypes = { 
  tours: PropTypes.array,
  employees: PropTypes.array,
}
