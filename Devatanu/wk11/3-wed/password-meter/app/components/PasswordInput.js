import React from 'react'
import passwordMeter from '../../lib/passwordMeter'
import './PasswordInput.scss'
import StrengthBar from './StrengthBar'

export default class PasswordInput extends React.Component {

  constructor(props){
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      passwordStrength : 0
    }
  }

  handleTextChange(event){
    this.setState({ passwordStrength : passwordMeter(event.target.value)})
  }

  render(){
    const {passwordStrength} = this.state
    
    return (
    <div>
      <StrengthBar strength={passwordStrength}/>
      
      <input 
      onChange = {this.handleTextChange}
      className = "password-box" 
      type="password"/>

    </div>
    )
  }

}
