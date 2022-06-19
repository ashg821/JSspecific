console.log('We are live.');
async function run(){
    console.log('Inside run() ');
    const url='https://api.instantwebtools.net/v1/airlines';
    const response=await fetch(url);
    console.log('After response was awaited');
    const user= await response.json();
    console.log('After user was awaited');
    return user;
}
console.log('Before Calling');
console.log(run().then(data=>console.log(data)));
console.log('After Calling');