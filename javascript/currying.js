// function volume(length){
//     return function(breadth){
//         return function(height){
//             return length*breadth*height
//         }
//     }
// }
// console.log(volume(1)(2)(3));

function volume1(length){
    return function(breadth){
        return function(height){
            return length*breadth*height
        }
    }
}
console.log( volume1(10)(20)(30));