import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import GamingVideos from './components/GamingVideos'
import TrendingVideos from './components/TrendingVideos'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{darkTheme, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={TrendingVideos} />
          <Route exact path="/gaming" component={GamingVideos} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
