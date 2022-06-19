// //console.log('we are live.');

const newSymbol=Symbol(2+3);
// console.log(newSymbol);
const anotherSymbol=Symbol(5);
// console.log(newSymbol===anotherSymbol);             //even if the type and values are equal, because symbol constructor attaches a unique Id kind of thing with a variable


let key1=Symbol('key1');
let key2=Symbol('key2');

let obj={};
obj[key1]='Ashwani';
obj[key2]='Kumar';
// console.log(obj);

obj.skill='C++';
// console.log(obj['skill']);

// console.log(obj[key1]);

for(keys in obj){
    // console.log(obj[keys]);
}                                           //for in loop doesn't work for the key that are assigned by using Symbol(), it also holds for the stringify method()

// console.log(JSON.stringify(obj));

