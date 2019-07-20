import React from 'react'
import {validate} from './validation'

class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      valid: false,
      focused: false
    }
  }

  handleUserInput ({target: {type, value}}) {
    this.props.onChange(value);
    this.setState({
        focused: true
      },
      () => {
        this.setValidationValue(validate(value, type));
      }
    )
  }

  setValidationValue (resultValidation) {
    this.setState({
      valid: resultValidation !== null
    })
  }

  setStyleForInput () {
    if (this.state.focused) {
      return this.state.valid ? "input-valid" : "input-not-valid";
    } else {
      return "input";
    }
  }

  displayFlags () {
    return this.state.valid === false && this.state.focused ? 'flex' : 'none'
  }

  render () {
    const {name, placeholder, icon, invalidMessage, value} = this.props;
    return (
      <div className="input-container">
        <input type={name} className={this.setStyleForInput()} placeholder={placeholder} value={value} onChange={this.handleUserInput.bind(this)}/>
        <img src={icon} alt={name} className="icon"/>
        <span className="check-mark" style={{display: this.state.valid ? 'flex' : 'none'}}>&#x2714;</span>
        <span className="incorrect" style={{display: this.displayFlags()}}>&#x2716;</span>
        <p className="incorrect-text" style={{display: this.displayFlags()}}>{invalidMessage}</p>
      </div>
    )
  }
}

export default Input
