const appRoot = document.querySelector("#app")

const meta = {
 title: "Indecision App",
 subtitle: "This Indecision App will helps in making better decisions",
 options: []
}

const onFormSubmit = (e) => {
 e.preventDefault()

 const option = e.target.elements.option.value
 if (option) {
  meta.options.push(option)
  e.target.elements.option.value = ""
  renderIndecisionApp()
 }
}

const onRemoveAll = () => {
 meta.options = []
 renderIndecisionApp()
}

const onMakeDecision = () => {
 const randomNum = Math.floor(Math.random() * meta.options.length)
 const option = meta.options[randomNum]
 alert(option)
}
//JSX ==> javascript XML
const renderIndecisionApp = () => {
 const template = (
  <div>
   <h1> {meta.title} </h1>
   {meta.subtitle && <p>{meta.subtitle}</p>}
   <p>{ meta.options.length > 0 ? "Here are you options": "No options" }</p>
   <p>{meta.options.length}</p>
   <ol>
    {
     meta.options.map((option) => <li key={option}>{option}</li>)
    }
   </ol>
   <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button>Add Option</button>
   </form>
   <button disabled={meta.options.length === 0} onClick={onMakeDecision}>What should I do</button>
   <button onClick={onRemoveAll}>Remove All</button>
  </div>
 )
 
 ReactDOM.render(template, appRoot)
}

renderIndecisionApp()