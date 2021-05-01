class VisibilityToggle extends React.Component{
 constructor(props) {
  super(props)
  this.handleToggleClick = this.handleToggleClick.bind(this)
  this.state = {
   visibility: false
  }
 }

 handleToggleClick() {
  this.setState((prevState) => {
   return {
    visibility: !prevState.visibility
   }
  })
 }

 render() {
  return (
   <div>
    <h1> Visibility Toggle </h1>
    <button onClick={this.handleToggleClick}>{this.state.visibility ? "Hide details" : "Show details"}</button>
    { this.state.visibility && <p>Hey. These are some details you can now see!!</p>}
   </div>
  )
 }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))