let a=[4,5,7,8,2,3,4,5,6,7,8,9,7,1,0]
let b=a.sort()
let c=[... new Set(b)]
console.log(c);

let sum=0;
let n=c.length

for(i=n-1;i<n;i++){
    sum=sum+c[i]
}
console.log(sum);