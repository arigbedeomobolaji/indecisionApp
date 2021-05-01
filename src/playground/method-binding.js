// SUMMARY
// WE HAVE TWO WAYS TO BIND THOSE EVENT HANDLERS
// 1. === We can call bind inline and render which is inefficient
// 2. === what we are going to be doing and which is efficient is calling bind in the constructor method

/*
METHOD BINDING
in render classes that extends the React.Component class, the other methods in the class expect the render() method loses their this
binding and this is not specific to es6 classes or react components 
*/


const obj = {
 name: "Arigbede Omobolaji Paul",
 getName() {
  return this.name
 }
}

console.log(obj.getName())



const getName = obj.getName  // Here we're referencing the obj.getName but this breaks the this binding

/* 
They both try to run the same code that's obj.getName() and getName()
The probelm is that the context they ran is very different
obj.getName() is in the context of an object and we have access to the object as the this binding
but when we break it out to a function like ==> const getName = obj.getName ==> we actually lose that context
i.e. the context does not get trasnferred ==> we just have a regular function
and regular function have undefined for this by default
*/

/* 
regular function have undefined for this by default
(function () {
 console.log(this)
}()) */

/* 
We need to look for a way to set the THIS BINDING in certain situation
and to do this we're going to use the BIND METHOD AVAILABLE on functions in Javascript

When we call the bind() method we get our function back but we can use the first argument to set the THIS CONTEXT for the function I'm calling it on
*/

// There are various places where we lose the this binding and EVENT HANDLERS and EVENT CALLBACK are one of them


//In React Component extended classes we can fix lost binding in two ways
// 1. Binding it inline ==> <button onClick={this.handlerPick.bind(this)}></button>
//This method is inefficient because it is been called/bind everytime we re-render our react component
//2. Overriding constructor
// constructo(props){ 
//  super(props)  // if we didn't call super(props) then we'll not have access to this.props so it's important to do this
//  this.handlePick = this.handlePick.bind(this)
// }

//This make sure that whenever we call handlePick, the context is correct which means if i use it multiple times in other methods
//I'll not have to type manual multiple bind calls inline and it also means that I have to run THIS BINDING once  i.e. ====>
//this.hadlePick = this.hadlePick.bind(this) ===> once when the component first gets initialized. So it doesn't has to get rebond 
//every single time the components renders which is way more effecient than the method 1. Binding inline