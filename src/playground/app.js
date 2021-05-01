class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
    options: props.options
    }
  }
  
  componentDidMount() {
    try {
      const data = localStorage.getItem("options")
      const options = JSON.parse(data)
      if(options) this.setState(() => ({ options }))
      
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

 handlePick() {
  let randomNumber = Math.floor(Math.random() * this.state.options.length)
  let randPick = this.state.options[randomNumber]
  alert(randPick)
 }

 handleDeleteOptions() {
  this.setState(() => ( {options: []} ))
  }
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ( {
      options: prevState.options.filter((option) => option !== optionToRemove)
    } ))
  }

 handleAddOption(option) {

  if (!option) {
   return "Option must not be empty"
  } else if( this.state.options.indexOf(option) > -1) {
   return "Option already exist"
  }

  this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
 }

 render() {
  const subtitle = "Put your life in the hands of a Computer"
  return (
   <div>
    <Header subtitle={subtitle} />
    <Action
     hasOptions={this.state.options.length > 0} 
     handlePick={this.handlePick}
     />
    <Options
      options={this.state.options} 
      handleDeleteOptions={this.handleDeleteOptions}
      handleDeleteOption={this.handleDeleteOption}
      hasOptions={this.state.options.length > 0} 
     />
    <AddOptions
     handleAddOption={this.handleAddOption}
    />
   </div>
  )
 }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.title && <h2>{props.subtitle}</h2>}
    </div>
  )
}

const Action = (props) => {
  return (
    <div>
     <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
     >What Should I do</button>
    </div>
   )
}


const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Please add few options</p>}
     <button
        onClick={props.handleDeleteOptions}
        disabled={!props.hasOptions}
     >Remove All</button>
     {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
     }
    </div>
   )
}

const Option = (props) => {
  return (
    <div>
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }
          }>Remove</button>
      </div>
    </div>
   )
}

class AddOptions extends React.Component {
 constructor(props) {
   super(props)
   
  this.handleAddOption = this.handleAddOption.bind(this)
  this.state = {
   error: undefined
  }
 }

 handleAddOption(e) {
  e.preventDefault()
  const option = e.target.elements.option.value.trim()
  const error = this.props.handleAddOption(option)
  this.setState(() => ({error}))

  e.target.elements.option.value = ""
 }

 render() {
  return (
   <div>
    <form onSubmit={this.handleAddOption}>
     {this.state.error && <p>{ this.state.error }</p>}
     <input type="text" name="option" />
     <button>Add Option</button>
    </form>
   </div>
  )
 }
}

//DefaultProps
Header.defaultProps = {
  title: "Indecision"
}

IndecisionApp.defaultProps = {
  options: []
}

ReactDOM.render(<IndecisionApp />, document.querySelector("#app"))