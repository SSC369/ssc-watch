import {Component} from 'react'
import Cookie from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import NavbarMedium from '../NavbarMedium'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  LoadingContainer,
  NoVideosDescription,
  NoVideosImage,
  NoVideosTitle,
  RetryButton,
  NoVideosViewContainer,
} from '../Home/styledComponents'
import {
  TrendingVideosResponsiveContainer,
  TrendingVideosHeadingContainer,
  TrendingHeading,
  TrendingIconContainer,
  TrendingContainer,
  TrendingVideosList,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'INPROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideos: [],
    responseStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({responseStatus: apiStatus.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
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
        const publishedDate = ` ${formatDistanceToNow(
          new Date(video.published_at),
        ).slice(-7)} ago`
        const eachVideo = {
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          channelName: video.channel.name,
          channelProfileImageUrl: video.channel.profile_image_url,
          viewCount: video.view_count,
          publishedAt: publishedDate,
        }
        return eachVideo
      })

      this.setState({
        trendingVideos: formattedData,
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
      <RetryButton onClick={() => this.getTrendingVideosData()} type="button">
        Retry
      </RetryButton>
    </NoVideosViewContainer>
  )

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosList>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoItem key={eachVideo.id} video={eachVideo} />
        ))}
      </TrendingVideosList>
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
              <TrendingVideosResponsiveContainer
                data-testid="trending"
                darkTheme={darkTheme}
              >
                <NavbarMedium />
                <TrendingContainer>
                  <TrendingVideosHeadingContainer
                    data-testid="banner"
                    darkTheme={darkTheme}
                  >
                    <TrendingIconContainer darkTheme={darkTheme}>
                      <HiFire fontSize={30} color="#ff0000" />
                    </TrendingIconContainer>
                    <TrendingHeading darkTheme={darkTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingVideosHeadingContainer>
                  {this.renderVideosData(darkTheme)}
                </TrendingContainer>
              </TrendingVideosResponsiveContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default TrendingVideos
