import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import {
  Header,
  NxtWaveLogo,
  HeaderRightSection,
  HeaderMoonImage,
  HeaderProfileImage,
  LogoutButton,
} from '../StyledComponent/styled'

const TopNavBar = ({isDark, changeMode}) => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/')
    Cookies.remove('jwt_token')
  }

  const toggleMode = () => {
    changeMode()
  }

  const handleLogoClick = () => {
    navigate('/home')
  }

  console.log(faSun)
  return (
    <Header isDark={isDark}>
      <div className="header-left-section">
        <NxtWaveLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxtwave-logo"
          onClick={handleLogoClick}
        />
      </div>
      <HeaderRightSection>
        {isDark ? (
          <FontAwesomeIcon
            icon={faSun}
            style={{
              color: '#ffffff',
              width: '25px',
              height: '25px',
              marginRight: '5px',
              marginTop: '2px',
            }}
            onClick={toggleMode}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            style={{
              color: 'black',
              width: '25px',
              height: '25px',
              marginRight: '5px',
              marginTop: '2px',
            }}
            onClick={toggleMode}
          />
        )}
        <HeaderProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutButton onClick={logout} isDark={isDark}>
          Logout
        </LogoutButton>
      </HeaderRightSection>
    </Header>
  )
}

export default TopNavBar
