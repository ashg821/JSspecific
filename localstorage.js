localStorage.setItem('Name','Ashwani');       //localstorage works in key value pairs
localStorage.setItem('Age',23);
localStorage.setItem('Strength','Diligent');

// console.log(localStorage.getItem('Strength'));      //fetching the stored data from the localStorage


// localStorage.clear();

//clear a particular key value pair
// localStorage.removeItem('Name');

// storing arrays
const newArray=['Red','Yellow','Green','Blue'];
const obj={
    Name: 'Ashwani',
    Age: 23,
    Strength: 'Diligent'
};
localStorage.setItem('newArray', JSON.stringify(newArray));      //for storing objects you have to first convert them into JSON string while adding the items, and parse them while retreiving the item if you dont want the format of object to change to string
localStorage.setItem('obj', JSON.stringify(obj));

// console.log(JSON.parse(localStorage.getItem('newArray')));
// console.log(JSON.parse(localStorage.getItem('obj')));

//Session Storage

sessionStorage.setItem('Name','Ashwani');       //essionstorage also works in key value pairs
sessionStorage.setItem('Age',23);
sessionStorage.setItem('Strength','Diligent');
sessionStorage.setItem('newArray', JSON.stringify(newArray));      
sessionStorage.setItem('obj', JSON.stringify(obj));

console.log(JSON.parse(sessionStorage.getItem('newArray')));
console.log(JSON.parse(sessionStorage.getItem('obj')));