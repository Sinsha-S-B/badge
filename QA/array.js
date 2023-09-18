//-------------largest-------
// let a=[23,45,21,44,99,78]
// let lar=a[0]

// for(i=0;i<a.length;i++){
//     if(a[i]>lar){
//         lar=a[i]
//     }
// }
// console.log(lar);

//++++++++++ checking empty array++++++++++

// const ar=[]
// const ar1=[1,2,3,4]

// if(ar1.length===0){
//     console.log('array is empty');

// }
// else{
//     console.log('array not empty');
// }

//+=================array sorting===============

// let ar=[38,56,45,90,23,21,36]

// let temp;
// for(i=0;i<ar.length-1;i++){
//     for(j=i+1;j<ar.length;j++){
//         if(ar[j]<ar[i]){
//             temp=ar[j]
//             ar[j]=ar[i]
//             ar[i]=temp
//         }
//     }
// }
// console.log(ar);

//********************palindrome************************** */

// function palindrome(number){
//     let num=number.toString()
//     let len=num.length

//     for(i=0;i<len/2;i++){
//         if(num[i]!==num[len-1-i]){
//             return false
//         }
//     }
//     return true

// }
// console.log(palindrome(1212));

//----------anagram using includes--------

// function anagram(str1,str2){
//     if (str1.length!=str2.length){
//         return false
//     }

//     for (const char of str1){
//         if(!str2.includes(char)){

//             return false
//         }
//     }
//     return true
// }
// console.log(anagram("sinsha","nisahs"));

//----------anagram using for loop --------
let a = "sinsha";
let b = "sinsha";

if (a.length == b.length) {
  flag = 0;
  for (i = 0; i < a.length; i++) {
    count = 0;
    for (j = 0; j < a.length; j++) {
      if (a[i] == b[j]) {
        count = 1;
        break; 
      }
    }
    if (count == 0) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
    console.log("is anagram");
  } else {
    console.log("not anagram");
  }
} else {
  console.log("not anagram");
}
