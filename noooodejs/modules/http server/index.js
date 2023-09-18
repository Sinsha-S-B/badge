const http = require("http");

const httpServer = http.createServer((req, res) => {
  console.log("new req received");
   

//   switch (req.url) {
//     case "/":
//       res.end("this is home page");
//       break;
//     case "/about":
//       res.end("hai sinsha");
//       break;
//     case "/home":
//       res.end("home page");
//       break;
//     default:
//       res.end("404 error");
//   }
res.write('hello from http server')


  res.end()
});

httpServer.listen(5000, () => {
  console.log("server started");
});
