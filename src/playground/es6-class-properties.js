
class OldClassSyntax {
 constructor(name){
  this.name = name
  this.getGreeting = this.getGreeting.bind(this)
 }

 getGreeting() {
  return `Good day and we welcome you ${this.name}`
 }

}

const oldClass = new OldClassSyntax("Omobolaji")

const getGreeting = oldClass.getGreeting
console.log(getGreeting())


class newClassSyntax {
 name = "Omooblaji"

 getGreeting = () => {
  return `Gooday ${this.name}`
 }
}

const newClass = new newClassSyntax

const newGetGreeting = newClass.getGreeting

console.log(newGetGreeting())