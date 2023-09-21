let a=[30,19,49,25,100,256,1,11]
let n=a.length
let value=2555
let flag=0

for(i=0;i<n;i++){
    if(a[i]===value){
        flag=1
        console.log(i);
        break
    }
}

if(flag==1){
    console.log("true");
}else{
    console.log("false");
}