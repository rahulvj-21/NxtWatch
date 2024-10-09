import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './Components/Home'
import LoginPage from './Components/LoginPage'
import VideoItem from './Components/VideoItem'
import Trending from './Components/Trending'
import TrendingVideoItem from './Components/TrendingVideoItem'
import Gaming from './Components/Gaming'
import GamingItem from './Components/GamingItem'
import SavedVideos from './Components/SavedVideos'
import './App.css'

const App = () => {
  const [savedVideos, setSavedVideos] = useState(
    JSON.parse(localStorage.getItem('savedVideos')) || {},
  )
  const [isCross, setIsCross] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos))
  }, [savedVideos])

  const saveVideo = video => {
    setSavedVideos(prevVideos => {
      if (!Array.isArray(prevVideos)) prevVideos = []
      const isAlreadySaved = prevVideos.some(
        savedVideo => savedVideo.id === video.id,
      )
      if (isAlreadySaved) {
        return prevVideos.filter(savedVideo => savedVideo.id !== video.id)
      } 
        return [...prevVideos, video]
      
    })
  }

  const changeCrossButton = () => {
    setIsCross(!isCross)
  }

  const changeMode = () => {
    setIsDark(!isDark)
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <Home
            isDark={isDark}
            changeMode={changeMode}
            changeCrossButton={changeCrossButton}
            isCross={isCross}
          />
        }
      />
      <Route
        path="/videoitem/:id"
        element={
          <VideoItem
            isDark={isDark}
            changeMode={changeMode}
            saveVideo={saveVideo}
          />
        }
      />
      <Route
        path="/trending"
        element={<Trending isDark={isDark} changeMode={changeMode} />}
      />
      <Route
        path="/trendingvideoitem/:id"
        element={
          <TrendingVideoItem
            isDark={isDark}
            changeMode={changeMode}
            saveVideo={saveVideo}
          />
        }
      />
      <Route
        path="/gaming"
        element={<Gaming isDark={isDark} changeMode={changeMode} />}
      />
      <Route
        path="/gamingitem/:id"
        element={
          <GamingItem
            isDark={isDark}
            changeMode={changeMode}
            saveVideo={saveVideo}
          />
        }
      />
      <Route
        path="/savedvideos"
        element={
          <SavedVideos
            videos={savedVideos}
            isDark={isDark}
            changeMode={changeMode}
          />
        }
      />
    </Routes>
  )
}

export default App
