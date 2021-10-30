const axios = require('axios');

const getAllEmployees = () => {    
  return new Promise((resolve, reject)=>{
    return axios.get('https://my-json-server.typicode.com/cferretti/data-test/employees')
      .then(response => resolve(response.data))
      .catch(error => reject(error));    
  });
}; 

module.exports = {
  getAllEmployees
};

