let a=[1,2,3,4]
let b=[5,6,7]
let c=[]
let m=a.length
let n=b.length

for(i=0;i<m;i++){
      c[i]=a[i]
}
for(i=0;i<n;i++){
      c[i+m]=b[i]
}
console.log(c);