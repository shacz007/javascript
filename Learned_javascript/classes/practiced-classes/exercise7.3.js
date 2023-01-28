class Animals{
    constructor(animal, sound){
        this.animal = animal;
        this.sound =sound;
    }
    animal_sound(){
        console.log(this.animal+" makes "+this.sound+" sound");
    }
    
}
Animals.prototype.sayhi = function(){
    console.log(this.animal+" says hi!");

Animals.prototype.pet = function(pet){
    pet = "pet";
    console.log(this.animal + " is your " + pet);
}
}
let a = new Animals("cat","meow");
let b = new Animals("dog","bow");
console.log(a);
a.animal_sound();
a.sayhi();
a.pet();
console.log("*********************************************");
console.log(b);
b.animal_sound();
b.sayhi();
b.pet();
console.log("##############################################");