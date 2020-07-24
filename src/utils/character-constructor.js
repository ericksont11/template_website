// with the properties contained inside
export default function Character(name, profession, horizontalSpeed, verticalSpeed) {
    this.name = name;
    this.profession = profession;
    this.horizontalSpeed = horizontalSpeed;
    this.verticalSpeed = verticalSpeed;
  }
    // method which prints all of the stats for a character
Character.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: "+ this.profession + "\nVertical Speed: "+ this.verticalSpeed + "\nHorizontal Speed: "+ this.horizontalSpeed)
};
  
Character.prototype.adjustHorizontalSpeed = function() {
    this.horizontalSpeed++ 
};

Character.prototype.adjustVerticalSpeed = function(n) {
    this.verticalSpeed++ 
};
  