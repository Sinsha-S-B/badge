const express = require('express');
const app = express();

// Example database (usually replaced with a real database)
const users = {
  1: { id: 1, name: 'John' },
  2: { id: 2, name: 'Alice' },
  3: { id: 3, name: 'Bob' },
};
app.get('/',(req,res)=>{
  res.send('hai from express server')
})

//dynamic routing
app.get('/:name', (req, res) => {
  const name = req.params.name;
  res.send(`dynamic rotuing ,hai hellow  ${name}`);
});

//query vs params
app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // Access route parameter 'id'
  const name = req.query.name;// Access query parameter 'name'
  const age=req.query.age   
  res.json({ userId, name,age });

});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// http://localhost:5000/users/1?name=John&age=28(try this url)