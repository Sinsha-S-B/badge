let x={
    fname:'sinsha',
    lname:'suresh'
}

function greet(state){
    console.log('i am '+this.fname+" "+this.lname+" from "+state);
}

greet.call(x,"kerala")
greet.apply(x,["tamilnadu"])

let y=greet.bind(x,'karnataka')
y()

  