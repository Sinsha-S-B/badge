// function x(){
//     const ar=[56,89,90,34,'sinsha']

//     const [a,b,...rest]=ar
//     console.log(a,b,rest)

// }
// x()



// function y(...rest){
// const total=rest.reduce((sum,current)=>sum+current)
// console.log(total);
// }

// y(1,2,3,4,5,6,10)


function a1(...rest){
    const total=rest.reduce((sum,current)=>sum+current)
    console.log(total);

}

let a2=[1,2,3,4,5,6]
a1(...a2)