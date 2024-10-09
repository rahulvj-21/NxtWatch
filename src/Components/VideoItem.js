import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import TopNavBar from './NavBar/TopNavBar'
import SideNavBar from './NavBar/SideNavBar'
import {
  Container,
  SidebarAndContent,
  MainContent,
  VideoTitle,
  LikeAndViewContainer,
  ViewsContainer,
  VideoAge,
  LikesContainer,
  LikeContainerField,
  HorizontalLine,
  ChannelDetails,
  ChannelLogo,
  ChannelName,
  ChannelSubscriber,
  VideoDetails,
  LightLoadingScreen,
  DarkLoadingScreen,
} from './StyledComponent/styled'

const VideoItem = ({saveVideo, isDark, changeMode}) => {
  const {id} = useParams()
  const [videoDetails, setVideoDetails] = useState(null)
  const [isLiked, setIsLiked] = useState(
    JSON.parse(localStorage.getItem(`isLiked-${id}`)) || false,
  )
  const [isDisliked, setIsDisliked] = useState(
    JSON.parse(localStorage.getItem(`isDisliked-${id}`)) || false,
  )
  const [isSaved, setIsSaved] = useState(
    JSON.parse(localStorage.getItem(`isSaved-${id}`)) || false,
  )

  const loadVideos = async () => {
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        setVideoDetails(data.video_details)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadVideos()
  }, [id])

  useEffect(() => {
    localStorage.setItem(`isLiked-${id}`, JSON.stringify(isLiked))
  }, [isLiked, id])

  useEffect(() => {
    localStorage.setItem(`isDisliked-${id}`, JSON.stringify(isDisliked))
  }, [isDisliked, id])

  useEffect(() => {
    localStorage.setItem(`isSaved-${id}`, JSON.stringify(isSaved))
  }, [isSaved, id])

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

  if (!videoDetails) {
    return isDark ? (
      <DarkLoadingScreen>
        <p>Loading...</p>
      </DarkLoadingScreen>
    ) : (
      <LightLoadingScreen>
        <p>Loading...</p>
      </LightLoadingScreen>
    )
  }

  const handleLike = () => {
    if (isDisliked) setIsDisliked(false)
    setIsLiked(!isLiked)
  }

  const handleDislike = () => {
    if (isLiked) setIsLiked(false)
    setIsDisliked(!isDisliked)
  }

  const handleSaveVideo = () => {
    setIsSaved(!isSaved)
    saveVideo(videoDetails)
  }

  const {
    title,
    view_count,
    published_at,
    description,
    channel,
    video_url,
  } = videoDetails
  const {name: channel_name, subscriber_count, profile_image_url} = channel
  const embed_url = video_url.replace('watch?v=', 'embed/')

  return (
    <Container isDark={isDark}>
      <TopNavBar isDark={isDark} changeMode={changeMode} />
      <SidebarAndContent>
        <SideNavBar isDark={isDark} />
        <MainContent isDark={isDark}>
          <iframe width="1200" height="600" src={embed_url} />
          <VideoDetails>
            <VideoTitle>{title}</VideoTitle>
            <LikeAndViewContainer>
              <ViewsContainer>
                <p>{view_count} Views</p>
                <VideoAge>{calculateVideoAge(published_at)}</VideoAge>
              </ViewsContainer>
              <LikesContainer>
                <LikeContainerField onClick={handleLike}>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{
                      color: isLiked ? 'blue' : isDark ? 'white' : 'black',
                    }}
                  />
                  {isLiked ? 'Liked' : 'Like'}
                </LikeContainerField>
                <LikeContainerField onClick={handleDislike}>
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    style={{
                      color: isDisliked ? 'blue' : isDark ? 'white' : 'black',
                    }}
                  />
                  {isDisliked ? 'Disliked' : 'Dislike'}
                </LikeContainerField>
                <LikeContainerField onClick={handleSaveVideo}>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    style={{
                      color: isSaved ? 'Red' : isDark ? 'white' : 'black',
                    }}
                  />
                  {isSaved ? 'Saved' : 'Save'}
                </LikeContainerField>
              </LikesContainer>
            </LikeAndViewContainer>
            <HorizontalLine isDark={isDark} />
            <ChannelDetails>
              <ChannelLogo src={profile_image_url} alt="channel logo" />
              <div>
                <ChannelName>{channel_name}</ChannelName>
                <ChannelSubscriber>
                  {subscriber_count} Subscribers
                </ChannelSubscriber>
              </div>
            </ChannelDetails>
            <p>{description}</p>
          </VideoDetails>
        </MainContent>
      </SidebarAndContent>
    </Container>
  )
}

export default VideoItem
