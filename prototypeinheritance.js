let proto={
    slogan: function (){
        return "Jai Hind";
    },
    changeName: function (newName){
        this.name=newName;
    }
}
//creating oject using another object
let ash=Object.create(proto);
console.log(ash);
ash.name="Ashwani";
ash.role="Programmer";
ash.changeName('Ashwani1');

//another way of creating objects using another objects, but this is the old method to do this 
let ash1=Object.create(proto,{
    name: {value : 'Varsha', writable: true},
    role: {value: 'Teacher', writable: true}
});

ash1.changeName('Vineet');

//now we'll see how to inherit functions and properties of prototype of one constructor to the other

function Employee(name, salary, experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

let ashObj=new Employee('Ashwani', 100000, 5);

Employee.prototype.slogan=function (){
    console.log(`this is the best company in the whole world. Regards ${this.name}`);
}

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language=language;
}

let ashProg=new Programmer('Ashwani', 100000, 3, 'JavaScript');

Programmer.prototype=Object.create(Employee.prototype);
console.log(ashProg);
