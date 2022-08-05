const axios = require('axios');

exports.fetchData = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return response.data;
    });
};