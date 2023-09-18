const person={
    name:'sinsha',
    age:28,
    address:{
        city:'kannur',
        pin:670622
    }
}

const keys=Object.keys(person)
console.log(keys)

const values=Object.values(person)
console.log(values);

const entries=Object.entries(person)
console.log(entries);


// const target={a:1,b:2,name:'sinsha'}
// const source={c:3,d:4,e:5}
// const merged=Object.assign(source,target)
// console.log(merged);

