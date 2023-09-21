let a=[9,3,6,1,3,8,9,1,4,5]
let value=3
let b=a.sort()
let c=[... new Set(b)]
let n=c.length
let sum=0
console.log(c);

for(i=n-3;i<n;i++){
    sum=sum+c[i]
}

console.log(sum);