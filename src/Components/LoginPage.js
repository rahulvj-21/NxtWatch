import {createContext, useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainContainer,
  LoginForm,
  LogoContainer,
  NxtwaveLogo,
  FormFields,
  InputFields,
  LoginButton,
  ErrorMessage,
} from './StyledComponent/styled'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const toggleCheckbox = () => {
    setShowPassword(!showPassword)
  }

  const openMainPage = async e => {
    e.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 10})
      const jwtToken = Cookies.get('jwt_token')
      if (jwtToken !== undefined) navigate('/home')
    } else {
      setError('Username or Password is Incorrect!')
    }
  }

  return (
    <MainContainer>
      <LoginForm onSubmit={openMainPage}>
        <LogoContainer>
          <NxtwaveLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxtwave-logo"
          />
        </LogoContainer>
        <FormFields>Username:</FormFields>
        <InputFields
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <FormFields>Password:</FormFields>
        <InputFields
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="checkbox" onClick={toggleCheckbox} />
        <label>Show Password</label>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton type="submit" className="login-button">
          Login
        </LoginButton>
      </LoginForm>
    </MainContainer>
  )
}

export default LoginPage
