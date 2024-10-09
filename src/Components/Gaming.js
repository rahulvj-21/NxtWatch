import {Navigate, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGamepad} from '@fortawesome/free-solid-svg-icons'
import TopNavBar from './NavBar/TopNavBar'
import SideNavBar from './NavBar/SideNavBar'
import {
  Container,
  SidebarAndContent,
  GamesContainer,
  GameHead,
  TrendingText,
  Games,
  GamesImg,
  GameTitle,
  GameViews,
} from './StyledComponent/styled'

const Gaming = ({isDark, changeMode}) => {
  const [gamesList, setGamesList] = useState([])

  const LoadVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Failed to fetch videos')
      }
      const data = await response.json()
      console.log(data.videos)
      setGamesList(data.videos)
    } catch (error) {
      console.error('Error loading videos:', error)
    }
  }

  useEffect(() => {
    LoadVideos()
  }, [])

  const jwtToken = Cookies.get('jwt_token')
  if (!jwtToken) return <Navigate to="/" />

  return (
    <Container isDark={isDark}>
      <TopNavBar isDark={isDark} changeMode={changeMode} />
      <SidebarAndContent>
        <SideNavBar isDark={isDark} />
        <div>
          <GameHead>
            <FontAwesomeIcon icon={faGamepad} style={{fontSize: '30px'}} />
            <TrendingText>Gaming</TrendingText>
          </GameHead>
          <GamesContainer isDark={isDark}>
            {gamesList.map(game => (
              <Games key={game.id}>
                <Link to={`/gamingitem/${game.id}`}>
                  <GamesImg src={game.thumbnail_url} alt={game.title} />
                </Link>
                <GameTitle>{game.title}</GameTitle>
                <GameViews>{game.view_count} Watching Worldwide</GameViews>
              </Games>
            ))}
          </GamesContainer>
        </div>
      </SidebarAndContent>
    </Container>
  )
}

export default Gaming
