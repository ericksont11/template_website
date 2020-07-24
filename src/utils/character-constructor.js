// with the properties contained inside
export default function Character(name, profession) {
    this.name = name;
    this.profession = profession;
    this.speed = 1
  }
    // method which prints all of the stats for a character
Character.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: "+ this.profession + "\nSpeed: "+ this.speed)
};
  
Character.prototype.speedUp = function() {
    this.speed++
};
  