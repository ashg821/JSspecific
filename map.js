// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

/*Essential Map Methods
Method	Description
new Map()	Creates a new Map
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	    Returns the number of elements in a Map*/

let myMap=new Map([['Name', 'Ashwani Kumar'],['Age',23],['City','New Delhi']]);    //1st way to set the key value pair

myMap.set('Language','Javascript'); //second way to set the key value pair

let key4='Field';
myMap.set(key4,'Web Development');      //third way to set the key value pair
// console.log(myMap);

// console.log(myMap.get(key4));           //get returns the value of the key that has been passed in the get() function


//using for of loop to iterate through the map
// 1. for both key and value
// 2. for only keys
// 3. for only values 
for(let [key,value] of myMap){
    // console.log('Key is', key, 'and value is', value);
}
for(x of myMap.entries()){
    console.log(x);
}


for(let key of myMap.keys()){
    // console.log(key);
}

for(let value of myMap.values()){
    // console.log(value);
}

//using forEach to iterate through map
myMap.forEach((value,key)=>{
    // console.log(key, ":", value);
});

//convert map into array
let myArray=Array.from(myMap);
// console.log(myArray);

//if you want to get a array of keys only
let myArrayKeys=Array.from(myMap.keys());
// console.log(myArrayKeys);

//if you want to get the arrray of values only
let myArrayValues=Array.from(myMap.values());
// console.log(myArrayValues);