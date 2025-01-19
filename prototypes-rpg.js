//Character Creation with prototypes and using Objects, and Prototypes:
//Using constructors to create simplistic characters for using wirthin a very basic Role-Play-Game(RPG).
function Character(name, profession, age, strength, hitpoints){
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
}
//Method which prints of all the stats for a character
Character.prototype.printStats = function (){
    console.log(
        `Name:${this.name}\n
        Profession:${this.profession}\n
        Age: ${this.age}\n
        Strength: ${this.strength}\n
        Hitpoints:${this.hitpoints}\n`
    );
console.log(`\n--------\n`);
}