//Cnstructor function which can take in a series of values and create objects
// with the prototypes contained inside;

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

 //Method which determines whether or not a character's "hitpoints" are less than zero
  // and returns true or false depending upon the outcome
  Character.prototype.isAlive = function (){
    if(this.hitpoint> 0) {
        console.log(`${this.name} is still alive!`)
          console.log(`\n-----------\n`);
          return true;
    } else{
         console.log(`${this.name} has died`)
         return false;
    }
  };

  //Method takes in a second object and decreases their "hitpoints" by this Character's stats when called
  Character.prototype.attack = function (character2){
   character2.hitpoint -= this.strength;
  };

  //Method which increases this character's stats when called
Character.prototype.levelUp = function (){
  this.age += 1;
  this.strength += 5;
  this.hitpoit += 25;
};

//creates two characters using the "character" constructor
const gabriel = new Character('Gabriel', 'Marketing', 20, 12, 70);
const jams = new Character('Jams', 'CEO Marketing', 25, 22, 60);

gabriel.printStats();
jams.printStats();

gabriel.attack(jams);
jams.printStats();
jams.isAlive();

gabriel.levelUp();
gabriel.printStats();

