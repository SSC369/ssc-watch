import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import GamingVideos from './components/GamingVideos'
import TrendingVideos from './components/TrendingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NxtWatchContext from './context/NxtWatchContext'
import SavedVideosRoute from './components/SavedVideos'
import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  saveVideo = video => {
    const {savedVideos} = this.state
    const findVideo = savedVideos.find(eachVideo => eachVideo.id === video.id)
    if (findVideo === undefined) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    } else {
      const filterVideos = savedVideos.filter(item => item.id !== video.id)
      this.setState({savedVideos: filterVideos})
    }
    console.log(savedVideos)
  }

  render() {
    const {darkTheme, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          savedVideos,
          saveVideo: this.saveVideo,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={TrendingVideos} />
          <Route exact path="/gaming" component={GamingVideos} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/saved-videos/" component={SavedVideosRoute} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
