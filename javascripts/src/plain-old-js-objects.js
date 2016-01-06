/* Write your code for the plain-old-js-objects-spec here */

// age
// height
// fruit
// grow fruit each year

// Orange
// diameter
//

var FRUIT_BEARING_AGE = 2;
var MAX_AGE = 10;

var createTree = function(options){
  if( !options ){ options = {age:0, height: 0, orangeCount: 0}; }
  this.age = options.age;
  this.height = options.height;
  this.orangeCount = options.orangeCount;
  this.isAlive = true;
  this.grow = function(){
    this.age++;
    this.height += 10;
    if (this.age > MAX_AGE){
      this.isAlive = false;
    };
    if (( this.age >= FRUIT_BEARING_AGE ) && ( this.isAlive === true )){
      this.orangeCount =+ Math.ceil(( Math.random() * 10));
    };
  };
  this.dropOrange = function(){
    this.orangeCount--;
    return new Orange;
  };

  return this;
};

function pickOrange(tree){
  tree.orangeCount--;
  return new Orange;
};

var Orange = function(){
  this.diameter = (Math.random() * 5);
};
