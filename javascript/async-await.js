// function number(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve('1111111111111') 
//      },1000)
//     })
//  }

// function name1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('sinsha') 
//         },3000)
//    })
// }


// name1()
//   .then((name) => {
//     console.log('Name:', name);
//     // Call the number function and handle the resolved value
//     return number();
//   })
//   .then((phoneNumber) => {
//     console.log('Phone Number:', phoneNumber);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
 
// async function result(){
    
//     let y=await number()
//     console.log(y);
//     let x=await name1()
//     console.log(x);
// }
// result()



//++++simple example+++++++++


console.log('hellow from console');
const greet=async ()=>{
    const y=await "hellow from async"
    console.log(y);
}
greet()

for(i=0;i<3;i++){
    console.log(i);
}







