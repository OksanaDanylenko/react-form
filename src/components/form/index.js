import React from 'react'
import iconEmail from '../../assets/images/mail.png'
import iconPass from '../../assets/images/lock.png'
import Input from '../input'
import ButtonLogin from '../button-login'
import ForgotPass from '../forgot-pass'

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange (name, value) {
    this.setState({...this.state, [name]: value})
  }

  login = e => {
    e.preventDefault();
  };

  render () {
    const {email, password} = this.state;
    return (
      <form className="form">
        <Input onChange={this.handleChange.bind(this, 'email')} name='email' placeholder='E-mail' icon={iconEmail} invalidMessage='Invalid Username' value={email}/>
        <Input onChange={this.handleChange.bind(this, 'password')} name='password' placeholder='Password' icon={iconPass} value={password} invalidMessage='Invalid Password'/>
        <ButtonLogin onClick={this.login}/>
        <ForgotPass/>
      </form>)
  }
}

export default Form
