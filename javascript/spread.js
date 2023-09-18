//---------------------arrays

// let a=[1,2,3,4,5]
// let ar1=[...a,6,7,8]
// console.log(ar1)

//---------------------array clone

// let b=[9,8,7,6]
// let b1=[...b]
// console.log(b1);

//------objects

// let obj1={
//     a:1,
//     b:2,
//     name:"sinsha",
//     address:{
//         city:'kannur',
//         pin:123
//     }
// }

// let obj2={...obj1}

//obj1 and obj2 are different objects.obj2 is the shallow copy of obj1

// obj2.name='haritha'
// obj2.address.city='thalassery'
// console.log(obj2);
// console.log(obj1);



//---------------maximum element from an array
// const ar=[1,2,3,4,5,6,7]
// const lar=Math.max(...ar)
// console.log(lar)


//+++++++++++++++++++application+++++++++

//++++++++copying+++++++

const ar1=[1,2,3]
const ar2=[...ar1]
console.log(ar2);