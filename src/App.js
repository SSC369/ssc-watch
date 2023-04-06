import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import GamingVideos from './components/GamingVideos'
import TrendingVideos from './components/TrendingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NxtWatchContext from './context/NxtWatchContext'
import SavedVideosRoute from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
    selectedTab: 'HOME',
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onChangeTab = id => {
    this.setState({selectedTab: id})
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
  }

  render() {
    const {darkTheme, savedVideos, selectedTab} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          savedVideos,
          selectedTab,
          saveVideo: this.saveVideo,
          toggleTheme: this.toggleTheme,
          onChangeTab: this.onChangeTab,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute
            exact
            path="/saved-videos/"
            component={SavedVideosRoute}
          />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
