//jshint ignore:start

import React from "react"
import AddOptions from "./AddOptions"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"


class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
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

  handlePick = () => {
    let randomNumber = Math.floor(Math.random() * this.state.options.length)
    let randPick = this.state.options[randomNumber]
    this.setState(() => ({
      selectedOption: randPick
    }))
  }

  handleDeleteOptions = () => {
    this.setState(() => ( {options: []} ))
  }
 
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ( {
      options: prevState.options.filter((option) => option !== optionToRemove)
    } ))
  }

  handleAddOption = (option) => {

    if (!option) {
      return "Option must not be empty"
    } else if( this.state.options.indexOf(option) > -1) {
      return "Option already exist"
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

render() {
 const subtitle = "Put your life in the hands of a Computer"
 return (
  <div>
     <Header subtitle={subtitle} />
     <div className="container">
      <Action
        hasOptions={this.state.options.length > 0} 
        handlePick={this.handlePick}
      />
      <div className="widget">
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
     </div>
   <OptionModal
     selectedOption={this.state.selectedOption}
     handleClearSelectedOption={this.handleClearSelectedOption}
   />
  </div>
 )
}
}

IndecisionApp.defaultProps = {
 options: []
}

export default IndecisionApp