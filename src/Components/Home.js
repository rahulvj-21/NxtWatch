import {useState, useEffect} from 'react'
import {useNavigate, Navigate, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import TopNavBar from './NavBar/TopNavBar'
import SideNavBar from './NavBar/SideNavBar'
import {
  Container,
  SidebarAndContent,
  MainContent,
  TopContentContainer,
  TopContent,
  NxtwaveLogoContent,
  TopContentButton,
  Searchbar,
  SearchbarIconButton,
  SearchContainer,
  Input,
  ClearButton,
  SeachbarIcon,
  VideoContainer,
  VideoList,
  VideoCard,
  VideoThumbnail,
  ChannelDetails,
  ChannelLogo,
  ChannelName,
  ViewsDetails,
  CrossButtonImg,
  CrossButton,
  NoResultImage,
  NoResultError,
} from './StyledComponent/styled'

const Home = ({isDark, changeMode, changeCrossButton, isCross}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [videosList, setVideosList] = useState([])
  const [filteredVideosList, setFilteredVideosList] = useState([])
  const [showCross, setShowCross] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const loadVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/all?search='
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
      console.log(data)
      setVideosList(data.videos)
      setFilteredVideosList(data.videos)
      setIsLoading(false)
    } catch (error) {
      console.error('Error loading videos:', error)
    }
  }

  useEffect(() => {
    loadVideos()
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

  const onCrossButton = () => {
    changeCrossButton()
  }

  const searchForVideo = e => {
    const filteredList = videosList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    setFilteredVideosList(filteredList)
  }

  const handleChange = e => {
    const {value} = e.target
    setSearchInput(value)
    setShowCross(value.length > 0)
  }

  const clearInput = () => {
    setSearchInput('')
    setShowCross(false)
    setFilteredVideosList(videosList)
  }

  return (
    <Container isDark={isDark}>
      <TopNavBar isDark={isDark} changeMode={changeMode} />
      <SidebarAndContent>
        <SideNavBar isDark={isDark} />
        <MainContent isDark={isDark}>
          {!isCross && !isDark ? (
            <TopContentContainer>
              <TopContent>
                <NxtwaveLogoContent
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxtwave-logo"
                />
                <p>But NxtWatch Premium prepaid plans with UPI</p>
                <TopContentButton>GET IT Now</TopContentButton>
              </TopContent>
              <CrossButton onClick={onCrossButton}>
                <CrossButtonImg src="https://cdn-icons-png.flaticon.com/512/9312/9312232.png" />
              </CrossButton>
            </TopContentContainer>
          ) : (
            <span />
          )}

          <Searchbar>
            <SearchContainer>
              <Input
                type="text"
                placeholder="Search"
                value={searchInput}
                style={{
                  color: isDark ? 'white' : 'black',
                  backgroundColor: isDark ? 'black' : 'white',
                }}
                onChange={handleChange}
              />
              {showCross && (
                <ClearButton onClick={clearInput}>&#x2715;</ClearButton>
              )}
            </SearchContainer>
            <SearchbarIconButton type="submit" isDark={isDark}>
              <SeachbarIcon
                src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                onClick={searchForVideo}
              />
            </SearchbarIconButton>
          </Searchbar>
          {filteredVideosList.length === 0 && isLoading === false ? (
            <NoResultError>
              <NoResultImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
            </NoResultError>
          ) : (
            <VideoContainer>
              <VideoList>
                {filteredVideosList.map(video => (
                  <VideoCard key={video.id}>
                    <Link to={`/videoitem/${video.id}`}>
                      <VideoThumbnail
                        src={video.thumbnail_url}
                        alt={video.title}
                      />
                    </Link>
                    <ChannelDetails>
                      <div>
                        <ChannelLogo src={video.channel.profile_image_url} />
                      </div>
                      <div>
                        <p>{video.title}</p>
                        <ChannelName>{video.channel.name}</ChannelName>
                        <ViewsDetails>{video.view_count} views </ViewsDetails>
                        <ViewsDetails>
                          {' '}
                          . {calculateVideoAge(video.published_at)}
                        </ViewsDetails>
                      </div>
                    </ChannelDetails>
                  </VideoCard>
                ))}
              </VideoList>
            </VideoContainer>
          )}
        </MainContent>
      </SidebarAndContent>
    </Container>
  )
}

export default Home
