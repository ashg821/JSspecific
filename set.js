// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

let mySet=new Set(['Ashwani', 'Kumar', 23, 'New Delhi']);

mySet.add('Javascript');

// console.log(mySet);

mySet.delete(23);
// console.log(mySet);

// console.log(mySet.has('Ashwani'));

// console.log(mySet.values());     //returns a set Iterator object

//iterating through a set
// 1. using the forEach loop
mySet.forEach((item)=>{
    // console.log(item);
});

//2. Using the for of loop

for(item of mySet){
    // console.log(item);
}

//also you can convert a set into array
let myArray= Array.from(mySet);
console.log(myArray);
