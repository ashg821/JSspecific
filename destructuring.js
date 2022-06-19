// The destructuring assignment syntax is a JavaScript expression that makes it possible to 
// unpack values from arrays, or properties from objects, into distinct variables.

let a,b,c;
[a,b]=[10,20];
// console.log(a,b);

[a,b,...c]=[20,30,40,50,60];     //javascript is a smart programming language which with its syntax allow you to assign values into variables smartly(... is a spread operator)

// console.log(a,b,c);

({a,b,...c}={a:'Ashwani',b:23, c:'Javascript',d:'New Delhi',e:'Web Developer'});

// console.log(a,b,c);         //c gets all the remaining values and is c is considered as a object


//Array destructuring
const array=[1,2,3,4,5,6,7,8,9];
const [d,e,...rest]=array;

// console.log(rest);

//Object destructuring
const obj={name: 'Ashwani',
age: 23,
city:'New Delhi',
language: 'javascript'};
// const {name,age, ...city}=obj;

// console.log(city);

//we can also assign the values of object properties to diferrent variables using the syntax:
const {name: Name, age: Age, ...City}=obj;
// console.log(City);

//in case of nested objects
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };
  const { johnDoe: { age, email }} = user;
  console.log(age, email    );