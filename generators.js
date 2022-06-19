console.log("We are live");

function add(a,b){
    return a+b;
};
function* generator(){
    let i=0;
    yield add(2,5);
    while(i<5){
        yield i++;
    }
}

let gen= generator();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

