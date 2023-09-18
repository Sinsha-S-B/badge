let a=[1,2,3,4,5]

a.forEach((numbers)=>{
    console.log(numbers);
})

//----------calculating sum-------------

let b=[1,2,3,4,5]
let sum=0
b.forEach((numbers)=>{
    sum+=numbers
})
console.log(sum);

//=======claculating total number of character=======


let ar=['a','b','b','b','7','*','+']
let count=[]

ar.forEach((item)=>{

    if(count[item]){
        count[item]++

    }else{

        count[item]=1

    }
})
console.log(count);