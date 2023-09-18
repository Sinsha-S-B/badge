// ------------var function scoped and global scoped
// var s = 'sinsha'
// function x() {

//   y = 123
//   console.log(y)
//   console.log(s)
// }
// console.log(y)
// x()

//---------------------let block scoped

// function x() {
//   if (true) {
//     let a = "sinsha";
//     console.log(a);
//   }

//   // console.log('outside if',a)
// }

// x();
// console.log("outside function", a);

//..............................var hoisting
// console.log(a)
// var a=10

//..............................let won't hoisting
// console.log(b)
// let b=30

//----var can redecalre and update
// var a='sinsha'
// var a='asd'//redeclaring

// a=123//updating
// console.log(a);

//----let can update won't re-declare
// let a='sinsha'
// let a='asd'

// a='qwe'
// console.log(a);

//====const cant be updated and redeclared

// const a=123
// const a=456
// a=890
// console.log(a)

//+++++++++++object with const

const obj={
  name:'sinsha',
  heigth:156
}
obj.name='haritha'
// obj={
//   city:'kannur',
//   pin:156
// }
console.log(obj);

//----------------multiple decleration of var

// function a(){
//     console.log(a1);
//     var a1=100
//     var a1;
//     var a1;
//     var a1;
// }
// a()

//...........................multiple decleration of let
// function b(){
//     console.log(b1);
//     let b1=300;
//     let b1;
//     let b1;
// }

// b()

//+++++++++++++++++const

// function x(){
//     const a=700
//     a=760
// }
// x()

// function c() {
//   const e = [];

//   e.push(123);
//   console.log(e);
//   e = [143];
//   console.log(e);
// }

// c();
