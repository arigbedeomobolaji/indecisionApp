// jshint ignore:start

import React from "react"

export default class AddOptions extends React.Component {
  state = {
    error: undefined
  }
 
 handleAddOption = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value.trim()
  const error = this.props.handleAddOption(option)
  this.setState(() => ({error}))
 
  e.target.elements.option.value = ""
 }
 
 render() {
  return (
   <div>
     {this.state.error && <p class="add-option-error">{ this.state.error }</p>}
    <form className="add-option" onSubmit={this.handleAddOption}>
        <input type="text" name="option" className="add-option__input" />
        <button
          className="button"
        >
        Add Option</button>
    </form>
   </div>
  )
 }
}
 
// jshint ignore:end