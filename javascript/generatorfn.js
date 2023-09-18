function* counter(){
    let x=0
    while(true){
       yield x++
    }
}

let count=counter()

for(let i=0;i<5;i++){
    console.log(count.next().value);
}

// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);
