let obj={
    Name: 'Ashwani',
    Age: 23,
    Weight: 62
}
console.log(obj);

function Obj(givenName, givenAge, givenWeight){
    this.Name=givenName;
    this.Age=givenAge;
    this.Weight=givenWeight;
}

let obj1=new Obj('Varsha', 23, 55);
console.log(obj1);      

Obj.prototype.getData= function (){
    console.log("The fetched name from the object is:", this.Name);
    console.log("The fetched age from the object is:", this.Age);
    console.log("The fetched weight from the object is:", this.Weight);
}
Obj.prototype.setData= function (newName, newAge, newWeight){
    this.Name=newName;
    this.Age=newAge;
    this.Weight=newWeight;
}
obj1.setData("Ashwani", 23, 65);
obj1.getData("Ashwani", 23, 65);
// console.log(obj1);