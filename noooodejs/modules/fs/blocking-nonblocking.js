const { error } = require("console");
const fs = require("fs");
const os=require('os')
console.log('core:',os.cpus().length);

console.log(100);

fs.readFile("./contacts.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log('non-blocking:',result);
  }
});
console.log(200);

console.log("3");

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log('blocking',result);

// fs.readFile("./contacts.txt", "utf-8", (error, result) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('non-blocking2:',result);
//     }
//   });

console.log("4");
