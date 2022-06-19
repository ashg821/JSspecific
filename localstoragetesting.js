localStorage.setItem('Name','Ashwani');
localStorage.setItem('Age',23);
localStorage.setItem('Strength',"Hard-working, Good-values, Empathatic, Disciplined");

let newArray=['Hello', 'World', 2022];
localStorage.setItem('Hello', JSON.stringify(newArray));

console.log(localStorage.getItem('Strength'));          
console.log(JSON.parse(localStorage.getItem('Hello')));          

localStorage.removeItem('newArray');