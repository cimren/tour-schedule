const express = require('express');
const axios = require('axios');
const {getAllTours, getToursByEmployee} = require('./services/tour.service.js');
const {getAllEmployees} = require('./services/employee.service.js');

const app = express();
app.use('/app', express.static('dist'));

app.get('/employees', (req, res) => {
  getAllEmployees().then(response => {     
    res.send(response);
  });  
});

app.get('/tours', (req, res) => {  
  getAllTours().then(response => {     
      res.send(response);
    }); 
});

app.get('/tours/:id', (req, res) => {  
  getToursByEmployee(req.params.id).then((response)=>{
    res.send(response);
  });
  
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));