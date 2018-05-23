import React from 'react'
import PasswordInput from './PasswordInput'
import StrengthBar from './StrengthBar'
export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <PasswordInput />
    </div>
  }

}
