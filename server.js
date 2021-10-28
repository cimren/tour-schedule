const express = require('express');
const axios = require('axios');

const app = express();
app.use('/app', express.static('dist'));

app.get('/employees', (req, res) => {
  axios.get('https://my-json-server.typicode.com/cferretti/data-test/employees')
    .then(response => {      
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));