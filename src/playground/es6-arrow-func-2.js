//Differences and similarities between arrow and normal function
//1. Argument object - no longer bound with arrow function
//if you need the arguments of a function then stick with es-5 function
const add = function (a,b) {
 console.log(arguments)
 return a+b
}
console.log(add(10,10))

// arrow function we don't have access to the arguments keyword
const addArrow = (a, b) => {
 // console.log(arguments)  //result to a reference error (arguments is not defined)
 return a + b
}

console.log(addArrow(5,10))
//2. this keyword - no longer bound with the arrow function
//with es-6 arrow functions, your function no longer bind their own this value,
//instead they just use the value of the context they are created in.
//The fact that arrow functions don't bind their own this value is really useful
//An arrow function does not bound it's own this but the this of its parent object
const user = {
 name: "Arigbede Omobolaji",
 cities: ["Akure", "Ilesa", "Ilorin", "Sango-Ota"],
 printCities() {
  this.cities.forEach((city) => console.log(`${this.name} has lived in ${city}`))
 },
 printCitiesMessages() {
  return this.cities.map((city) => `${this.name} has lived in ${city}`)
 }
}

// // user.printCities()

// console.log(user.printCitiesMessages())

//Multiplier
const multiplier = {
 numbers: [2, 3, 4, 565, 56, 34, 32, 54, 56, 34, 32],
 multiplyBy: 10,
 multiply() {
  return this.numbers.map((number) => this.multiplyBy * number)
 }
}

console.log({multiplied: multiplier.multiply()})