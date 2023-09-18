//--------------having one promise is rejected

const pro1=Promise.reject(100)
const pro2=new Promise ((resolve,reject)=>{
    setTimeout((resolve)=>{
        console.log('first');
    },1000)
})

const pro3=new Promise ((resolve,reject)=>{
    setTimeout((resolve)=>{
        console.log('second');
    },2000)
})

const promises=[pro1,pro2,pro3]

Promise.any(promises)
.then((value)=>console.log(value))
.catch((error)=>{
    console.log(error);
})





//-----------------all the promises are rejected-----------

// const pro4 = Promise.reject(100);
// const pro5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("first");
//   }, 1000);
// });
// const pro6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("second");
//   }, 2000);
// });

// const proms = [pro4, pro5, pro6];

// Promise.any(proms)
//   .then((value) => console.log(value))
//   .catch((error) => {
//     console.log( error);
//   });
