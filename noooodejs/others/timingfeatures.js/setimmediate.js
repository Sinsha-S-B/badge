const x = () => {
  console.log("settimeout");
};
setTimeout(x, 5000);
const y = () => {
  console.log("setinterval");
};
setInterval(y, 5000);
const z = () => {
  console.log("setImmediate");
};
setImmediate(z);
console.log("console statement");




