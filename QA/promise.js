function add(n1,n2){
    return new Promise((resolve,reject)=>{
         resolve(n1+n2)
    })
}
function mul(sum){
    return new Promise((resolve,reject)=>{
          resolve(sum*5)
    })
}
function display(product){
       console.log(product);
}

add(3,4).then((sum)=>{
    return mul(sum)
}).then((product)=>{
    return display(product)
})