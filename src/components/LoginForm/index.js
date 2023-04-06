import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginFormContainer,
  LoginFormCard,
  CompanyLogo,
  InputContainer,
  LabelText,
  InputElement,
  ShowPasswordContainer,
  LoginButton,
  CheckboxElement,
  ShowPasswordText,
  WarningMessage,
  ErrorMessageContainer,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPass: false,
    errorMsg: '',
    darkTheme: false,
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  onShowPass = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}))
  }

  onSubmitCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      Cookie.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await response.json()
      this.setState({errorMsg: `*${data.error_msg}`})
    }
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {password, username, showPass, errorMsg, darkTheme} = this.state

    return (
      <LoginFormContainer darkTheme={darkTheme}>
        <LoginFormCard
          darkTheme={darkTheme}
          onSubmit={this.onSubmitCredentials}
        >
          <CompanyLogo
            src={
              darkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <InputContainer>
            <LabelText darkTheme={darkTheme} htmlFor="name">
              USERNAME
            </LabelText>
            <InputElement
              darkTheme={darkTheme}
              id="name"
              placeholder="Username"
              value={username}
              type="text"
              onChange={this.onChangeName}
            />
          </InputContainer>

          <InputContainer>
            <LabelText darkTheme={darkTheme} htmlFor="pass">
              PASSWORD
            </LabelText>
            <InputElement
              darkTheme={darkTheme}
              id="pass"
              placeholder="Password"
              value={password}
              type={showPass ? 'text' : 'password'}
              onChange={this.onChangePass}
            />
          </InputContainer>

          <ShowPasswordContainer>
            <CheckboxElement
              id="show"
              type="checkbox"
              onChange={this.onShowPass}
            />
            <ShowPasswordText darkTheme={darkTheme} htmlFor="show">
              Show Password
            </ShowPasswordText>
          </ShowPasswordContainer>

          <LoginButton type="submit">Login</LoginButton>
          <ErrorMessageContainer>
            <WarningMessage>{errorMsg}</WarningMessage>
          </ErrorMessageContainer>
        </LoginFormCard>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
