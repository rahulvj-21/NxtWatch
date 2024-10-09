import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faHome,
  faFire,
  faGamepad,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  SideHeader,
  NavbarUl,
  NavbarLi,
  SideHeaderBottomContent,
  SocialLogo,
  SocialLogoIcon,
  Navbar,
} from '../StyledComponent/styled'

const SideNavBar = ({isDark}) => (
    <SideHeader isDark={isDark}>
      <Navbar>
        <NavbarUl>
          <NavbarLi>
            <NavLink
              to="/home"
              style={({isActive}) => ({
                backgroundColor: isActive ? '#d7dfe9' : 'transparent',
                width: '300px',
                height: '50px',
                color: isActive ? 'red' : isDark ? 'white' : 'black',
                padding: '10px',
                textDecoration: 'none',
              })}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
          </NavbarLi>
          <NavbarLi>
            <NavLink
              to="/trending"
              style={({isActive}) => ({
                backgroundColor: isActive ? '#d7dfe9' : 'transparent',
                width: '300px',
                height: '50px',
                color: isActive ? 'red' : isDark ? 'white' : 'black',
                padding: '10px',
                textDecoration: 'none',
              })}
            >
              <FontAwesomeIcon icon={faFire} /> Trending
            </NavLink>
          </NavbarLi>
          <NavbarLi>
            <NavLink
              to="/gaming"
              style={({isActive}) => ({
                backgroundColor: isActive ? '#d7dfe9' : 'transparent',
                width: '300px',
                height: '50px',
                color: isActive ? 'red' : isDark ? 'white' : 'black',
                padding: '10px',
                textDecoration: 'none',
              })}
            >
              <FontAwesomeIcon icon={faGamepad} /> Gaming
            </NavLink>
          </NavbarLi>
          <NavbarLi>
            <NavLink
              to="/savedvideos"
              style={({isActive}) => ({
                backgroundColor: isActive ? '#d7dfe9' : 'transparent',
                width: '300px',
                height: '50px',
                color: isActive ? 'red' : isDark ? 'white' : 'black',
                padding: '10px',
                textDecoration: 'none',
              })}
            >
              <FontAwesomeIcon icon={faBookmark} /> Saved Videos
            </NavLink>
          </NavbarLi>
        </NavbarUl>
      </Navbar>
      <SideHeaderBottomContent isDark={isDark}>
        <h3>Contact Us</h3>
        <SocialLogo>
          <SocialLogoIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialLogoIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialLogoIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialLogo>
        <h4>Enjoy! Now to see your channel and recommendations!</h4>
      </SideHeaderBottomContent>
    </SideHeader>
  )

export default SideNavBar
