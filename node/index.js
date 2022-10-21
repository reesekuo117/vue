// console.log("hi node");

const axios = require('axios')
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
axios.get('https://localhost:3000/todos')
.then(response=>console.log(response.data))