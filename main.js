class Auto{
    constructor(color, year, name, engine ) {
           this.color = color;
           this.year = year;
           this.engine = engine;
           this.name = name;
    }
    startEngine() {
        console.log(`${this.name} engine started`);
    }
}

class Car extends Auto {
    constructor(color, year, name, engine, maxspeed){
        super(color, year, name , engine)
        this.maxspeed = maxspeed

    }
 
}

const cars = new Car('black', '1987—1996', 'BMW E34', 'V8', 250);
console.log(cars); 
cars.startEngine()