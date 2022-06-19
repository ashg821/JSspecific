// object literals for creating objects
let car={
    Name: 'Maruti 800',
    topSpeed: 120,
    run: ()=>{
        console.log('This car runs at a top speed of 120Kmph');
    }
}

//contuctors are used to create a general object template to create objects

function generalCar(givenName, givenSpeed){
    this.Name=givenName;
    this.topSpeed=givenSpeed;
    this.run=function (){
        console.log(`${this.Name} runs at a top speed of ${this.topSpeed}Kmph`);
    }
    this.analyze=function(){
        console.log(`${this.Name} runs ${200-this.topSpeed}kmph slower than Mercedes`);
    }
}

let car1=new generalCar('Maruti Alto', 120);
let car2=new generalCar('Swift Dezire', 150);

console.log(car1);