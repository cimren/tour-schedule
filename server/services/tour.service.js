const axios = require('axios');

const getAllTours = () => {    
  return new Promise((resolve, reject)=>{
    return axios.get('https://my-json-server.typicode.com/cferretti/data-test/tours')
      .then(response => resolve(response.data))
      .catch(error => reject(error));    
  });
}; 

const getToursByEmployee = (id) => {    
  return new Promise((resolve, reject)=>{
    return getAllTours()
      .then(response => {
        const filteredTours = response.filter(item => item.id === id); 
        resolve(filteredTours);
      })
      .catch(error => reject(error));    
  }); 
}; 

module.exports = {
  getAllTours,
  getToursByEmployee
};

