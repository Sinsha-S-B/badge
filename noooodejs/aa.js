//----------express router using app
app.get("/:name", (req, res) => {
  let name=req.params.name
  res.send("hello "+name);
});



//----------express router using router module-------

router.get('/', (req, res,{userId}) => {
    res.send('Hello', userId.name);
  });

//===========http server

const httpServer = http.createServer((req, res) => {
  res.write("hello from http server");
  res.end();
});

const server=http.createServer((req,res)=>{
  res.write("hello from server")
  res.end()
})