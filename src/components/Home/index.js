import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {RiCloseFill} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookie from 'js-cookie'
import Header from '../Header'
import VideoItem from '../VideoItem'
import {
  HomeResponsiveContainer,
  HomeDetailsContainer,
  PremiumMembershipContainer,
  PremiumImage,
  PremiumDescription,
  GetItButton,
  PremiumCloseButton,
  PremiumContent,
  SearchInputContainer,
  HomeInputElement,
  SearchButton,
  VideosResponsiveContainer,
  VideosListContainer,
  LoadingContainer,
  NoVideosDescription,
  NoVideosImage,
  NoVideosTitle,
  RetryButton,
  NoVideosViewContainer,
} from './styledComponents'
import NavbarMedium from '../NavbarMedium'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatus = {
  loading: 'IN PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    displayPremium: true,
    searchInput: '',
    videosData: [],
    responseStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getHomeData()
  }

  getHomeData = async () => {
    this.setState({responseStatus: apiStatus.loading})
    const jwtToken = Cookie.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(video => {
        const eachVideo = {
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          channelName: video.channel.name,
          channelProfileImageUrl: video.channel.profile_image_url,
          viewCount: video.view_count,
          publishedAt: video.published_at,
        }
        return eachVideo
      })

      this.setState({
        videosData: formattedData,
        responseStatus: apiStatus.success,
      })
    } else {
      this.setState({responseStatus: apiStatus.failure})
    }
  }

  onSearchVideo = event => {
    event.preventDefault()
    this.getHomeData()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNoVideosView = darkTheme => (
    <NoVideosViewContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosTitle darkTheme={darkTheme}>
        No Search results found
      </NoVideosTitle>
      <NoVideosDescription darkTheme={darkTheme}>
        Try different key words or remove the search filter
      </NoVideosDescription>
      <RetryButton type="button" onClick={() => this.getHomeData()}>
        Retry
      </RetryButton>
    </NoVideosViewContainer>
  )

  renderSuccessView = darkTheme => {
    const {videosData} = this.state
    if (videosData.length === 0) {
      return this.renderNoVideosView(darkTheme)
    }
    return (
      <>
        {videosData.map(eachVideo => (
          <VideoItem key={eachVideo.id} video={eachVideo} />
        ))}
      </>
    )
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
      <RetryButton onClick={() => this.getHomeData()} type="button">
        Retry
      </RetryButton>
    </NoVideosViewContainer>
  )

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
    const {displayPremium, searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <HomeResponsiveContainer>
                <NavbarMedium darkTheme />
                <HomeDetailsContainer darkTheme={darkTheme}>
                  {displayPremium && (
                    <PremiumMembershipContainer>
                      <PremiumContent>
                        <PremiumImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <PremiumDescription>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </PremiumDescription>
                        <GetItButton>GET IT NOW</GetItButton>
                      </PremiumContent>
                      <PremiumCloseButton
                        type="button"
                        onClick={() => {
                          this.setState({displayPremium: false})
                        }}
                      >
                        <RiCloseFill color="#181818" fontSize={30} />
                      </PremiumCloseButton>
                    </PremiumMembershipContainer>
                  )}

                  <VideosResponsiveContainer>
                    <SearchInputContainer
                      onSubmit={this.onSearchVideo}
                      darkTheme={darkTheme}
                    >
                      <HomeInputElement
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        placeholder="Search"
                        darkTheme={darkTheme}
                        type="text"
                      />
                      <SearchButton darkTheme={darkTheme} type="submit">
                        <AiOutlineSearch
                          fontSize={20}
                          color={darkTheme ? '#f9f9f9' : '#181818'}
                        />
                      </SearchButton>
                    </SearchInputContainer>

                    <VideosListContainer>
                      {this.renderVideosData(darkTheme)}
                    </VideosListContainer>
                  </VideosResponsiveContainer>
                </HomeDetailsContainer>
              </HomeResponsiveContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
