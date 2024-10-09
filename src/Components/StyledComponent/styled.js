import Styled from 'styled-components'

// Home
export const Container = Styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
  min-height: 100vh; 
  height: auto; 
`
export const Header = Styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
    height: 70px;
    width: 100%;
    position: fixed;
    z-index: 1000;
`
export const NxtWaveLogo = Styled.img`
    width: 200px;
    height: 50px;
`
export const HeaderRightSection = Styled.div`
    display: flex;
    flex-direction: row;
`
export const HeaderMoonImage = Styled.img`
  width: 30px;
  height: 30px;
  background-color: transparent;
`
export const HeaderProfileImage = Styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`
export const LogoutButton = Styled.button`
  background-color: ${props => (props.isDark ? '#313131' : 'white')};
  color: ${props => (props.isDark ? 'white' : 'blue')};
  border-color: ${props => (props.isDark ? 'white' : 'blue')};
  width: 80px;
  height: 30px;
  margin-left: 20px;
`
export const SidebarAndContent = Styled.div`
  display: flex;
  flex-direction: row;
`
export const SideHeader = Styled.div`
  width: 300px;
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  top: 70px;
`
export const Navbar = Styled.div`
  display:flex;
  flex-direction:column;
  margin-left:-50px;
`
export const NavbarUl = Styled.ul`
  list-style-type: none;
`
export const NavbarLi = Styled.li`
  display: flex; 
  text-align: left; 
`
export const SideHeaderBottomContent = Styled.div`
  color: ${props => (props.isDark ? 'white' : 'black')};
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  margin-bottom: 60px;
`
export const SocialLogo = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const SocialLogoIcon = Styled.img`
  width: 40px;
  height: 40px;
`
export const MainContent = Styled.div`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-left: 320px;
  margin-top: 70px;
  padding: 30px;
`
export const TopContentContainer = Styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  height: 250px;
  background-size: cover;
  background-position: center;
`
export const TopContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
`
export const NxtwaveLogoContent = Styled.img`
  width: 200px;
  height: 60px;
`
export const TopContentButton = Styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  border-color: grey;
  color: grey;
  font-family: Roboto;
`
export const SearchContainer = Styled.div`
  position: relative;
  display: inline-block;
`
export const Searchbar = Styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`
export const SearchbarIconButton = Styled.button`
  background-color: ${props => (props.isDark ? '#313131' : 'white')};
  width: 50px;
  height: 30px;
  border-radius: 0px;
  border: 1px solid #ccc;
`
export const SeachbarIcon = Styled.img`
  width: 20px;
  height: 20px;
`
export const VideoContainer = Styled.div`
  @media screen and (max-width: 576px){
    display:flex;
    justify-content:center;
  }
`
export const VideoList = Styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  padding: 10px;
  gap: 30px;  

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`
export const VideoCard = Styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoThumbnail = Styled.img`
  width:400px;
`
export const ChannelDetails = Styled.div`
  display: flex;
  flex-direction: row;
`
export const ChannelLogo = Styled.img`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  margin-right:10px;
`
export const ChannelName = Styled.p`
  color: grey;
`
export const ViewsDetails = Styled.span`
  color:grey;
`
export const CrossButtonImg = Styled.img`
  width:25px;
  height:25px;
`
export const CrossButton = Styled.button`
  width:35px;
  height: 25px;
  background-color: white;
  border: 0px;
  opacity: 80%;
`
export const Input = Styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 0px;
  font-size: 16px;
  box-sizing: border-box;
`

export const ClearButton = Styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #aaa;
`
export const NoResultImage = Styled.img`
  width:600px;
  height:500px;
`
export const NoResultErrorContainer = Styled.div`
`
export const NoResultError = Styled.div`
  margin-left:500px;
`
export const DarkLoadingScreen = Styled.div`
  background-color: black;
  color:white;
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`
export const LightLoadingScreen = Styled.div`
  background-color: white;
  color:black;
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`

// LoginPage
export const MainContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  height: 100vh;
`

export const LoginForm = Styled.form`
  background-color: white;
  width: 450px;
  height: 480px;
  padding: 40px;
`

export const LogoContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NxtwaveLogo = Styled.img`
  width: 250px;
  height: 60px;
  margin-bottom: 40px;
`
export const FormFields = Styled.p`
  text-align: left;
  display: block;
  width: 100%;
  margin-bottom: 10px;
`
export const InputFields = Styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
`
export const LoginButton = Styled.button`
  background-color: blue;
  color: white;
  font-weight: bold;
  font-size: medium;
  width: 370px;
  height: 50px;
  border-radius: 10px;
  border: 0px;
  margin-top: 20px;
`
export const ErrorMessage = Styled.p`
  color: red;
  font-weight: bold;
`

// VideoItem
export const VideoTitle = Styled.p`
  font-size:20px;
`
export const LikeAndViewContainer = Styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ViewsContainer = Styled.div`
  display:flex;
  flex-direction:row;
`
export const VideoAge = Styled.p`
  margin-left:10px;
`
export const LikesContainer = Styled.p`
  display:flex;
  flex-direction:row;
  gap:20px;
`
export const LikeContainerField = Styled.div`
  gap:15px;
`
export const HorizontalLine = Styled.hr`
  background-color:${props => (props.isDark ? 'grey' : 'black')}
  border:0px;
  height:3px;
`
export const ChannelSubscriber = Styled.p`
  color: grey;
`

// Trending
export const Head = Styled.div`
  background-color:grey;
  color:white;
  height: 90px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  padding:30px;
`
export const TrendingContent = Styled.div`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-left: 270px;
  margin-top: 40px;
  padding: 30px;
  font-size:30px;
`
export const TrendingText = Styled.span`
  margin-left:15px;
  font-size:25px;
`
export const Videos = Styled.div`
  display:flex;
  flex-direction: column;
  margin-top:150px;
  margin-left:50px;
  gap:30px;
`
export const TrendingVideoCard = Styled.div`
  display:flex;
  flex-direction:row;
`
export const TrendingVideoDetails = Styled.div`
  display:flex;
  flex-direction:column;
  margin-left:10px;
`
export const VideoImg = Styled.img`
  width:400px;
  height:200px;
`
export const TrendingVideoTitle = Styled.p`
  font-size:20px;
`
export const TrendingChannelName = Styled.p`
  font-size:15px;
  color:grey;
`
export const TrendingVideoViews = Styled.span`
  font-size:15px;
  color:grey;
`
export const VideoDetails = Styled.div`
  width:1200px;
`

// Gaming
export const GamesContainer = Styled.div`
  color: ${props => (props.isDark ? 'white' : 'black')};
  display:grid;
  grid-template-columns: 250px 250px 250px 250px;
  gap: 20px; 
  margin-left: 350px;
  margin-top:180px;
`
export const GameHead = Styled.div`
  background-color:grey;
  color:white;
  height: 90px;
  width: 100%;
  margin-left: 300px;
  margin-top: 70px;
  position: fixed;
  z-index: 1000;
  padding:30px;
`
export const Games = Styled.div`
  display:flex;
  flex-direction:column;
  margin-top:30px;
  margin-left:50px;
`
export const GamesImg = Styled.img`
  width: 250px;
  height: 300px;
`
export const GameTitle = Styled.p`
  font-size:18px;
`
export const GameViews = Styled.span`
  font-size:15px;
  color:grey;
`

// Saved Videos
export const NoSavedVideosImg = Styled.img`
  width:700px;
  height:500px;
  margin-left:400px;
  margin-top: 200px;
`
