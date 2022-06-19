const myArray = ['mango', 'kiwi', 'watermelon', 'guava', 'cherry', 'apple'];
function myArrayIterator(myArray) {
    let index = 0;
    return {
        next: function () {
            if (index < myArray.length) {
                return {
                    value: myArray[index++],
                    done: false
                };
            }
            else {
                return {
                    done: true
                };
            }
        }
    }
}

let fruitObj=myArrayIterator(myArray);
console.log(fruitObj.next().value);
console.log(fruitObj.next().value);
console.log(fruitObj.next().value);
console.log(fruitObj.next().value);
console.log(fruitObj.next().value);
console.log(fruitObj.next().value);
console.log(fruitObj.next().done);
