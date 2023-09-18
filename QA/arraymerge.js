// const a=[1,2,3]
// const b=[4,5,6,7]

// const c=[]

// for(i=0;i<a.length;i++){
//     c.push(a[i])
// }

// for(i=0;i<b.length;i++){
//     c.push(b[i])
// }
// console.log(c);


let a=[1,2,3,4]
let b=[5,6,7]
let c=[]
let m=a.length
let n=b.length

for(i=0;i<m;i++){
      c[i]=a[i]
}
for(i=0;i<n;i++){
      c[i+n]=b[i]
}
console.log(c);
