// function x(name,greet){
//     console.log('hello '+name);
//     greet()
// }
// function greet() {
//     console.log('how are you');   
// }

// x('sinsha',greet)

function add(n1,n2,display){
    const sum=n1+n2
    display(sum)
}

function display(sum){
    console.log(sum)
}

add(10,20,display)