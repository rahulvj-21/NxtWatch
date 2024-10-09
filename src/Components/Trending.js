import {Navigate, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFire} from '@fortawesome/free-solid-svg-icons'
import TopNavBar from './NavBar/TopNavBar'
import SideNavBar from './NavBar/SideNavBar'
import {
  Container,
  SidebarAndContent,
  TrendingContent,
  Head,
  TrendingText,
  Videos,
  TrendingVideoCard,
  TrendingVideoDetails,
  VideoImg,
  TrendingVideoTitle,
  TrendingChannelName,
  TrendingVideoViews,
} from './StyledComponent/styled'

const Trending = ({isDark, changeMode}) => {
  const [videosList, setVideosList] = useState([])

  const LoadVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
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
      setVideosList(data.videos)
    } catch (error) {
      console.error('Error loading videos:', error)
    }
  }

  useEffect(() => {
    LoadVideos()
  }, [])

  const jwtToken = Cookies.get('jwt_token')
  if (!jwtToken) return <Navigate to="/" />

  const calculateVideoAge = publishedAt => {
    const publishedDate = new Date(publishedAt)
    const currentDate = new Date()
    const differenceInMs = currentDate - publishedDate

    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24))

    if (differenceInDays < 1) {
      return 'Today'
    } 
      const years = Math.floor(differenceInDays / 365)
      return `${years} years ago`
    
  }

  return (
    <Container isDark={isDark}>
      <TopNavBar isDark={isDark} changeMode={changeMode} />
      <SidebarAndContent>
        <SideNavBar isDark={isDark} />
        <TrendingContent isDark={isDark}>
          <Head>
            <FontAwesomeIcon icon={faFire} />
            <TrendingText>Trending</TrendingText>
          </Head>
          <Videos>
            {videosList.map(video => {
              const {
                title,
                thumbnail_url,
                channel,
                view_count,
                published_at,
              } = video
              const {name: channelName} = channel
              return (
                <TrendingVideoCard key={video.id}>
                  <Link to={`/trendingvideoitem/${video.id}`}>
                    <VideoImg src={thumbnail_url} alt={title} />
                  </Link>
                  <TrendingVideoDetails>
                    <TrendingVideoTitle>{title}</TrendingVideoTitle>
                    <TrendingChannelName>{channelName}</TrendingChannelName>
                    <TrendingVideoViews>
                      {view_count} views . {calculateVideoAge(published_at)}
                    </TrendingVideoViews>
                  </TrendingVideoDetails>
                </TrendingVideoCard>
              )
            })}
          </Videos>
        </TrendingContent>
      </SidebarAndContent>
    </Container>
  )
}

export default Trending
