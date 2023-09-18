const promise1=Promise.resolve(45)
const num=32
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('sinsha'),1000)
})

Promise.all([num,promise1,promise2]).then((values)=>{
    console.log(values);
})

//----------------------reject case


// const pro1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('sinsha'),1000)
// })
// const pro2=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve(2),2000)
// })
// const pro3=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('rejected'),3000)
// })

// Promise.all([pro1,pro2,pro3]).then((values)=>{
//     console.log(values);
// }).catch((error)=>{
//     console.log(error);
// })