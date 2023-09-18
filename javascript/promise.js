// //+++++++++promise with .then(),resolved condition

// // let promise = new Promise(function (resolve, reject) {
// //     resolve('hello sinsha');
// // })
 
// // promise
// //     .then( (successMessage)=> {
// //         //success handler function is invoked
// //         console.log(successMessage);
// //     },(error)=> {
// //         console.log(error);
// //     })
// //+++++++++promise with .then(),rejected condition

// // let promise = new Promise(function (resolve, reject) {
// //     reject('hello error message');
// // })
 
// // promise
// //     .then( (successMessage)=> {
// //         //success handler function is invoked
// //         console.log(successMessage);
// //     },(error)=> {
// //         console.log(error);
// //     })

// //+++++++++promise with .catch(),rejected condition


// let promise = new Promise(function (resolve, reject) {
//     reject('hello error message');
// })
 
// promise
//     .then( (successMessage)=> {
//         //success handler function is invoked
//         console.log(successMessage);
//     }).catch((error)=>{
//         console.log(error);
//     })






// function add(n1,n2){
//     return new Promise((resolve,reject)=>{
//          resolve(n1+n2)
//     })
// }
// function mul(sum){
//     return new Promise((resolve,reject)=>{
//           resolve(sum*5)
//     })
// }
// function display(product){
//        console.log(product);
// }

// add(3,4).then((sum)=>{
//     return mul(sum)
// }).then((product)=>{
//     return display(product)
// })



  