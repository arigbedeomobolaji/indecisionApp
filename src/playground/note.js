//in or indecision we create a folder called public which will contain all of our asset that we're 
//going to serve on the web

//react-dom is react in web browser
//we also have react-native - mobile apps, react-VR (virtual reality)

//JSX stands for Javascript XML ==> Javascript Syntax extension ==> provided to us by REACT

//The whole point of package.json is to outline all the dependencies that our app is going 
//to need to run.
//babel-preset-babel ==> let babel to compile our react app
//babel-preset-env ==> let babel to compile our code from es2016, es2017 to es2015
//COmpiling our app using babel-cli
//babel file-to-output --out-file=where-to-output-it --presets=env,react(presets tobe used)


//Another feature of JSX is conditonal rendering
//conditional rendering or conditional logic 
//if one of your values in JSX result to undefined then nothing is going to show up
//There are three techniques for conditional rendering in JSX
//1. if statement using function
//2. ternary operator using JSX expression
//3. logical and == > which returns the last value if truthy or false if falsy


// | Event and Attributes |
// React uses a Virtual DOM Algorithm to efficiently render and re render our application
//React is super efficient, it uses some Virtual DOM ALgorithm in Javascript to determin the minimal number
//of changes that need to be made in order to correctly render the new application.
/* 
When a single piece of our application state changes like a number we can re render the application updating
it without worrying about slowing down the user or wasting a ton of resources and creating a laggy buggy application instead.

THE VIRTUAL DOM ALGORITHMS calculates if any changes need to be made and if they do it calculates the minial number of changes 

what comes back from React.createElement() is an object tha represents our entire JSX tree and we can use algorithms to compare 
two objects and that's exactly what react is doing
*/

/* When working with functions in React we only want to reference the function not call it cus if we call it
it will return whatever it's called from the function maybe undefined or number or string and that's not what we want */

//React doesn't render undefined, null, boolean and object

//REACT ARRAYS
/* 
 When JSX sees an array it renders each of the individual items side by side which means that this.
 (i.e. it breaks them out into their own expessions)
 {
  [98, 97, 96]
 }
 it breaks the into this
{98}{97}{96} ==> This actually what happens behind the scene
null, undefined and boolean values don't affect the array and don't show up
 
 We can make effecient use of array in react by rendering and Array of JSX inside JSX template
 When we are using JSX in arrays all we have to do is to tack on  key prop for each one and 
 that needs to be unique amongst the array.
 By adding key to Arrays in JSX we are allowing JSX acts behind the scenes to optimize the
 rendering process.
*/

/* REACT COMPONENT
 React uses a component based architecture which allows us to take our big complex applications and break them up
 into small little pieces each. each little piece being a new component.
 So Component are going to allow us to take our complex applications and make them simple
 Each component is responsible for the JSX that is supposed to be rendered when that component is used and 
 components can also handle user interaction on anything that's rendered

 react component syntax
 class ComponentName extends React.Component {
  render() {
   return jsx to be returned
  }
 }

 Component from React.Component is a class itself and it gives us all of the features of React.
 React Component requires one method to be defined that is render()
 // NB ==> with es6 class we might not define any method which is fine but with react component  we must define
 one method which is render() ==> render get called with NO ARGUMENTS and it returns some JSX
 react component enforces uppercase first letter for class/component name  but if you have a lower case first letter
 react won't penalize you just that it won't render your component
 The uppercase first letter is a way react differentiate between a HTML element and every React Component 
*/
/* Component Props
 It allows our component to communicate with one another. to make our component dynamic we need to pass data in when we initialize
 an instance of our  componentand this data is known as PROP. Setting up component props is the same as setting up HTML attribute
 for example id, classes, href etc 
 same as component we can pass in key value pairs called props 

 HOW TO GET ACCESS TO PROPS IN OUR REACT COMPONENT CLASS
 we do that using the (THIS KEYWORD). THIS is a reference to the current instance of our component and react gives us access to 
 our props returned as an object using this.props (i.e. this.props returns an object consisting of all our propKeys and their value)

SUMMARY
When we create instances of react components we can also choose to pass data into it
and that Data looks very much like HTML attributes but it;s really just a set of key value pairs where the 
key is always some sort of string and the value can be anything we like whether it's a string, array, nmber or 
any other type in javascript.
When we pass data into a component we can use that data inside of the component itself and all of our props are available on the this.props ==> 
This gives us a way to setup one way communication
*/

/* 
COMPONENT STATE
Component state is one of the more confusing reacts core concepts. It allows our component TO MANAGE SOME DATA 
So think about an object with various key value pairs and when that data changes the component will automatically re-render 
to reflect those changes.
With Component STate all we have to do is manipulate the data and the component is going to take care of
re-rendering itself.

STEPS IN SETTING UP A COMPONENT STATE
1. Set up the default state object
2. Component is rendered with default state values *
NB wherever we put asterisks things happens implicitly
3. Change state based on event
4. The component re-rendered using new state values
5. Start at three again
COmponent STate is essential for interactive applications
There is nothing wrong with passing an object to this.setState() as long as you don't need access to the previous state values
but whenever you need ACCESS TO THE PREVIOUS STATE VALUES  we should not be using an object but passing a function to this.setState(() => {...}) \

STATELESS FUNCTIONAL COMPONENTS
when we don't need state in our component we use a stateless functional component. 
It's like a regular function but the function name starts with a capital letter


LIFECYCLE METHODS (We only habve access to it in our Class Based COmponent and not accessible in our stateless functional Components)
There are built in methods that are available on a class based component and not available in stateless functions.
These are LIFECYCLE METHODS and they fire at various time in a given component life. for example when a class based component first get
rendered to the screen, with it get removed from the screen,  when something in the component get updated like the props and the 
state. All of this is going to allow us to add really cool functionality 
e.g
1. We will be able to populate an array of data with data from the DB when the component first get mounted to the broswer using
method ComponentDidMount() ===> as spelt.
2. We'll be able to save the data as the component updates
LIFECYCLE METHODS INCLUDES
1. componentDidMount() => This one fires when the component first gets mounted to the DOM
2. componentDidUpdate() ==> This is going to fire after the component updates (i.e. after the state or props  value change)
    We have access to some arguments a) prevProps ==> previous props b) prevState
3. componentWillUnmount() ==> This one fires when the component goes away


WEB PACK
Web Pack can ve defined as a module bundler for modern Javascript apps.
ADVANTAGES OF WEB PACK
1. It allows us to organize our javascript i.e. at the end of the day when we run our app through web pack we're going to
    get a single Javascript file back and tha file is called THE BUNDLER (It's going to contain everything our application
    needs to run. it's going to contain our dependencies as well as our application code written by ourself which means at the
    end of the day we're going to need only one script tag as opposed to needing as many script tag)
2.  We will be able to install dependencies via YARN and NPM


Web pack breaks up all of the files in our application into their own little islands. This island can then communicate using the
ES6 import and export syntax. This means we're going to be able to break up our application into multiple files that can 
communicate with one another

configuring web pack
==> We set the ENTRY,OUTPUT,MODE for our webpack
ENTRY is the code we want webpack to unbundle
OUTPUT is an object stating two properties is very important


There's actually two parts for using ES6 export and import with webpack
Part One ==> is the ability to load files you wrote
Part Two ==> is the ability to load in third party modules things like react and React DOM 

LOADER IN WEBPACK
A Loader lets you customize the behaviour of webpack when it laods a given file.
w.g anytime webpack sees a JS file person.js, we could do something with that JS file
there are also loader for scss 

babel-core is same as babel-cli, babel-cli allows you to run babel from
the command libe whereas babel-core module allows you to run babel from tools like web pack
babel-loader is a webpack pluging and it's going to allow us to teach webpack how to run
babel when webpack sees certain files.

source map helps us to debug complex application better
in our webpack.config.js addd another propery called devtool and set it to a string
source map helps chrome to figure out where the error in our bundle.js occurred in our module written by us


CLASS PROPERTIES SYNTAX
IT HELPS US TO ADD PROPERTIES RIGHT ON TO OUR CLASS AS OPPOSED TO JUST METHODS
using babel we'll be looking at the TRASNFORM-CLASS-PROPERTIES

We use class properties syntax babel plugin to create 
1. instance property directly in our class instead of inside a constructor function
2. It gives the ability to create functions that aren't going to have their binding messed up. 
as we know arrow functions doesn't have their own this binding instead they just use whatever this binding is in the parent scope and for classes.




*/