const deepclone=require('lodash')

const x={
    name:"sinsha",
    age:28,
    
    address:{
        city:"kannur",
        pin:670622

    }
}

const x1=JSON.parse(JSON.stringify(x))
const x2=deepclone.cloneDeep(x)

x1.address.city="thalassery"
console.log(x1);

x2.address.pin=1111111
console.log(x2);

