import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'
import {ModalOptionsContainer} from '../Header/styledComponents'
import {
  HomeNavbar,
  FooterIconsContainer,
  FooterSection,
  FooterTitle,
  FooterDescription,
  SocialMediaImage,
  NavButton,
  HomeOption,
  GamingOption,
  SavedVideosOption,
  TrendingOption,
  HomeOptionText,
  GamingOptionText,
  PlaylistOptionText,
  TrendingOptionText,
} from './styledComponents'

const NavbarMedium = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, selectedTab, onChangeTab} = value
      const IconColor = darkTheme ? '#f9f9f9' : '#181818'
      return (
        <HomeNavbar darkTheme={darkTheme}>
          <ModalOptionsContainer>
            <Link to="/" className="nav-link">
              <NavButton
                onClick={() => {
                  onChangeTab('HOME')
                }}
                type="button"
              >
                <HomeOption selectedTab={selectedTab} darkTheme={darkTheme}>
                  <AiFillHome
                    fontSize={30}
                    color={selectedTab === 'HOME' ? '#ff0000' : IconColor}
                  />
                  <HomeOptionText
                    selectedTab={selectedTab}
                    darkTheme={darkTheme}
                  >
                    Home
                  </HomeOptionText>
                </HomeOption>
              </NavButton>
            </Link>
            <Link to="/trending" className="nav-link">
              <NavButton
                onClick={() => {
                  onChangeTab('TRENDING')
                }}
                type="button"
              >
                <TrendingOption selectedTab={selectedTab} darkTheme={darkTheme}>
                  <HiFire
                    color={selectedTab === 'TRENDING' ? '#ff0000' : IconColor}
                    fontSize={30}
                  />
                  <TrendingOptionText
                    selectedTab={selectedTab}
                    darkTheme={darkTheme}
                  >
                    Trending
                  </TrendingOptionText>
                </TrendingOption>
              </NavButton>
            </Link>
            <Link to="/gaming" className="nav-link">
              <NavButton
                onClick={() => {
                  onChangeTab('GAMING')
                }}
                type="button"
              >
                <GamingOption selectedTab={selectedTab} darkTheme={darkTheme}>
                  <SiYoutubegaming
                    color={selectedTab === 'GAMING' ? '#ff0000' : IconColor}
                    fontSize={30}
                  />
                  <GamingOptionText
                    selectedTab={selectedTab}
                    darkTheme={darkTheme}
                  >
                    Gaming
                  </GamingOptionText>
                </GamingOption>
              </NavButton>
            </Link>
            <Link to="/saved-videos" className="nav-link">
              <NavButton
                onClick={() => {
                  onChangeTab('PLAYLIST')
                }}
                type="button"
              >
                <SavedVideosOption
                  selectedTab={selectedTab}
                  darkTheme={darkTheme}
                >
                  <MdPlaylistAdd
                    color={selectedTab === 'PLAYLIST' ? '#ff0000' : IconColor}
                    fontSize={30}
                  />
                  <PlaylistOptionText
                    selectedTab={selectedTab}
                    darkTheme={darkTheme}
                  >
                    Saved Videos
                  </PlaylistOptionText>
                </SavedVideosOption>
              </NavButton>
            </Link>
          </ModalOptionsContainer>

          <FooterSection>
            <FooterTitle darkTheme={darkTheme}>CONTACT US</FooterTitle>
            <FooterIconsContainer>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FooterIconsContainer>
            <FooterDescription darkTheme={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </FooterSection>
        </HomeNavbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavbarMedium
