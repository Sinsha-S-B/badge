const pro1=Promise.resolve(3)
const pro2=new Promise ((resolve,reject)=>
setTimeout(reject,100,'sinsha'))

Promise.allSettled([pro1,pro2])
.then((values)=>{
    console.log(values);
})

// .then((results)=>results.forEach((result)=>console.log(result.reason)))