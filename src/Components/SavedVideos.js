import React from 'react'
import {Link, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'
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
  NoSavedVideosImg,
  NoResultErrorContainer,
} from './StyledComponent/styled'

const SavedVideos = ({isDark, changeMode, videos}) => {
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
            <FontAwesomeIcon icon={faBookmark} />
            <TrendingText>Saved Videos</TrendingText>
          </Head>
          {videos.length === 0 ? (
            <NoResultErrorContainer>
              <NoSavedVideosImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
            </NoResultErrorContainer>
          ) : (
            <Videos>
              {videos.map(video => {
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
          )}
        </TrendingContent>
      </SidebarAndContent>
    </Container>
  )
}
export default SavedVideos
