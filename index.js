// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius
  };
  get diameter(){
    return this.radius * 2
  };
  get circumference(){
    return Math.PI * this.diameter
  };
  get area(){
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(input){
    this.radius = input / 2
    return this.radius 
  }

  set circumference(input){
    this.radius = (input / Math.PI) / 2
    return this.radius
  }
  set area(input){
    this.radius = Math.sqrt(input / Math.PI)
  }
  /*
  Define setter methods for diameter, 
  circumference, and area which will accept 
  values for each calculation, calculate the 
  radius based on the input value and set 
  this.radius accordingly
  Hint: You will need to use Math.sqrt() in area setter method
  */

}
