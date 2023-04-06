import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import NavbarMedium from '../NavbarMedium'
import GamingVideoItem from '../GamingVideoItem'
import {
  LoadingContainer,
  NoVideosDescription,
  NoVideosImage,
  NoVideosTitle,
  RetryButton,
  NoVideosViewContainer,
} from '../Home/styledComponents'
import {
  GamingVideosResponsiveContainer,
  GamingVideosHeadingContainer,
  GamingHeading,
  GamingIconContainer,
  GamingVideosContainer,
  GamingVideosList,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'INPROGRESS',
}

class GamingVideos extends Component {
  state = {
    gamingVideos: [],
    responseStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({responseStatus: apiStatus.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(video => {
        const eachVideo = {
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
        }
        return eachVideo
      })

      this.setState({
        gamingVideos: formattedData,
        responseStatus: apiStatus.success,
      })
    } else {
      this.setState({responseStatus: apiStatus.failure})
    }
  }

  renderLoadingView = darkTheme => (
    <LoadingContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={darkTheme ? '#ffffff' : '#181818'}
        height="50"
        width="50"
      />
    </LoadingContainer>
  )

  renderFailureView = darkTheme => (
    <NoVideosViewContainer>
      <NoVideosImage
        alt="failure view"
        src={
          darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
      />
      <NoVideosTitle darkTheme={darkTheme}>
        Oops! Something Went Wrong
      </NoVideosTitle>
      <NoVideosDescription darkTheme={darkTheme}>
        We are having some trouble to complete your request. Please try again.
      </NoVideosDescription>
      <RetryButton onClick={() => this.getGamingVideosData()} type="button">
        Retry
      </RetryButton>
    </NoVideosViewContainer>
  )

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosList>
        {gamingVideos.map(eachVideo => (
          <GamingVideoItem key={eachVideo.id} video={eachVideo} />
        ))}
      </GamingVideosList>
    )
  }

  renderVideosData = darkTheme => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case apiStatus.success:
        return this.renderSuccessView(darkTheme)
      case apiStatus.loading:
        return this.renderLoadingView(darkTheme)
      case apiStatus.failure:
        return this.renderFailureView(darkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <GamingVideosResponsiveContainer
                data-testid="gaming"
                darkTheme={darkTheme}
              >
                <NavbarMedium />
                <GamingVideosContainer>
                  <GamingVideosHeadingContainer
                    data-testid="banner"
                    darkTheme={darkTheme}
                  >
                    <GamingIconContainer darkTheme={darkTheme}>
                      <SiYoutubegaming fontSize={30} color="#ff0000" />
                    </GamingIconContainer>
                    <GamingHeading darkTheme={darkTheme}>Gaming</GamingHeading>
                  </GamingVideosHeadingContainer>
                  {this.renderVideosData(darkTheme)}
                </GamingVideosContainer>
              </GamingVideosResponsiveContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default GamingVideos
