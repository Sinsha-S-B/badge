// const originalArray = [1, 2, [3, 4]];
// const shallowCopyArray = [...originalArray];

// shallowCopyArray[2][0] = 100;

// console.log(originalArray[2][0]); // Output: 100 (changes reflected in originalArray)



var student1 ={ 
    name : "Manish",
    company : "Gfg"
 
    }
 
    var student2 =  { ...student1 } ;
 
    student1.name = "Rakesh"
 
    console.log("student 1 name is",student1.name)
    console.log("student 2 name is ",student2.name);