import {Component} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
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
  HomeNavbar,
  SearchInputContainer,
  HomeInputElement,
  SearchButton,
  VideosResponsiveContainer,
  VideosListContainer,
} from './styledComponents'

import {
  ModalOptionsContainer,
  ModalNavbarOption,
  OptionText,
} from '../Header/styledComponents'

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
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok) {
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
      console.log(formattedData)
      this.setState({
        videosData: formattedData,
        responseStatus: apiStatus.success,
      })
    } else {
      this.setState({responseStatus: apiStatus.failure})
    }
  }

  onSearchVideo = event => {
    this.setState({searchInput: event.target.value}, this.getHomeData)
  }

  render() {
    const {displayPremium, videosData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <HomeResponsiveContainer>
                <HomeNavbar darkTheme={darkTheme}>
                  <ModalOptionsContainer>
                    <ModalNavbarOption darkTheme={darkTheme}>
                      <AiFillHome
                        fontSize={30}
                        color={darkTheme ? '#f9f9f9' : '#181818'}
                      />
                      <OptionText darkTheme={darkTheme}>Home</OptionText>
                    </ModalNavbarOption>
                    <ModalNavbarOption darkTheme={darkTheme}>
                      <HiFire
                        color={darkTheme ? '#f9f9f9' : '#181818'}
                        fontSize={30}
                      />
                      <OptionText darkTheme={darkTheme}>Trending</OptionText>
                    </ModalNavbarOption>
                    <ModalNavbarOption darkTheme={darkTheme}>
                      <SiYoutubegaming
                        color={darkTheme ? '#f9f9f9' : '#181818'}
                        fontSize={30}
                      />
                      <OptionText darkTheme={darkTheme}>Gaming</OptionText>
                    </ModalNavbarOption>
                    <ModalNavbarOption darkTheme={darkTheme}>
                      <MdPlaylistAdd
                        color={darkTheme ? '#f9f9f9' : '#181818'}
                        fontSize={30}
                      />
                      <OptionText darkTheme={darkTheme}>
                        Saved Videos
                      </OptionText>
                    </ModalNavbarOption>
                  </ModalOptionsContainer>
                </HomeNavbar>
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
                      {videosData.map(eachVideo => (
                        <VideoItem key={eachVideo.id} video={eachVideo} />
                      ))}
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
