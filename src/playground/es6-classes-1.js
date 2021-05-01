// Constructor functions are functions that get called whenever we create a new instance of a class and it gets called
// Constructor functions get called implicitly when we instantiate our class
// with all of the arguments we pass in
// inside of class methods this refers to the class instance 

//extends keyword allows us to say a class Student extend(inherit) the methods and properies of an existing class say Person
// super keyword allows us to call the parent class ==> super( params)
class Person {
 constructor(name = "anonymous", location = "unknown", yearsLived = 0) {
  this.name = name
  this.location = location
  this.yearsLived = yearsLived
 }

 getGreeting() {
  return `Welcome, ${this.name}.`
 }

 getDescription() {
  return `${this.name} has been living in ${this.location} for ${this.yearsLived} year(s).`
 }
}

class Student extends Person {
 constructor(name, location, yearsLived, major){
  super(name, location, yearsLived)
  this.major = major
 }

 hasMajor() {
  return !!this.major
 }

 getDescription() {
  let description = super.getDescription()

  // description += this.hasMajor() ? ` Their Major is ${this.major}.`:""
  if (this.hasMajor()) {
   description += ` Their Major is ${this.major}`
  }
  
  return description
 }
}


class Traveler extends Person {
 constructor(name, location, yearsLived, homeLocation) {
  super(name, location, yearsLived)
  this.homeLocation = homeLocation
 }

 hasHomeLocation(){
  return !!this.homeLocation
 }

 getGreeting() {
  let greeting = super.getGreeting()

  if (this.hasHomeLocation()) {
   greeting += ` We noticed that your hometown is ${this.homeLocation}`
  }

  return greeting
 }
}

const omobolaji = new Traveler("Arigbede Omobolaji", "Ogu Town, Rivers State, Nigeria", 10, "Osun, Nigeria")
console.log(omobolaji.getGreeting())

const anonymous = new Traveler()
console.log(anonymous.getGreeting())