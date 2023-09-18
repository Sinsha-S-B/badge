function volume(length){
    return function(breadth){
        return function(height){
            return length*breadth*height
        }
    }
}
console.log(volume(10)(20)(30));