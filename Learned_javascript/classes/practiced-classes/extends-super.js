class Vehicle{
    constructor(color,currentspeed,MaxSpeed){
        this.color=color;
        this.currentspeed = currentspeed;
        this.MaxSpeed = MaxSpeed;
    }
    move(){
        console.log("moving at a "+ this.currentspeed);
    }
    accelerate(amount){
        return console.log(this.currentspeed =this.currentspeed + amount);
    }
}
class Motorcycle extends Vehicle{
    constructor(color,currentspeed,MaxSpeed,fuel){
        super(color,currentspeed,MaxSpeed)
        this.fuel = fuel;
    }
    dowheelie(){
        console.log("rides on single wheel");
    }                           
}

let motor = new Motorcycle("green", 75 ,180, "3/4th tank")
console.log(motor);
motor.move();
motor.accelerate(25);