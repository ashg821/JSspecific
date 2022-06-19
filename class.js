class Car{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
    age(x){
        
        return x-this.year;
    }
}

class Ford extends Car{
    constructor(name, year, speed){
        super(name, year);
        this.speed=speed;
    }
    Speed(){
        console.log(`The speed of the car ${this.name} is ${this.speed}`);
    }
    static tellmeYear(){
        console.log("The car was manufactured in the year 2020");
    }
}
const car1=new Car('Ford', 2001);
// console.log(car1.name);
let todayDate=new Date();
console.log(car1.age(todayDate.getFullYear()));

let newCar=new Ford('Ford', 2020, 250   );