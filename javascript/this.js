// let x={
//     fname:'sinsha',
//     lname:'suresh'
// }

// function greet(state){
//     console.log('i am '+this.fname+" "+this.lname+" from "+state);
// }

// greet.call(x,"kerala")

function Person(name) {
    this.name = name;
}

const person1 = new Person("Alice");
console.log(person1.name); // "Alice"
