const express = require('express');// Import the Express.js framework

const app = express();// Create an instance of the Express application
const port=3000

app.get('/:name', (req, res) => {
  let name=req.params.name
  res.send("hello "+name);

  //++=====res.json()
  // const data = { message: 'Hello, ' };
  // res.json(data); // Sends a JSON response
  
});// Define a route that responds to HTTP GET requests



app.listen(port, () => {
  console.log(`HTTP Server using Express.js is running on port ${port}`);
});// Start the HTTP server on port 3000
