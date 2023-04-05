import {Link} from 'react-router-dom'
import {RiFacebookFill, RiTwitterFill, RiLinkedinFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  ModalOptionsContainer,
  ModalNavbarOption,
  OptionText,
} from '../Header/styledComponents'
import {
  HomeNavbar,
  FooterIcon,
  FooterIconsContainer,
  FooterSection,
  FooterTitle,
  FooterDescription,
} from './styledComponents'

const NavbarMedium = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const IconColor = darkTheme ? '#f9f9f9' : '#181818'
      return (
        <HomeNavbar darkTheme={darkTheme}>
          <ModalOptionsContainer>
            <Link to="/" className="nav-link">
              <ModalNavbarOption darkTheme={darkTheme}>
                <AiFillHome
                  fontSize={30}
                  color={darkTheme ? '#f9f9f9' : '#181818'}
                />
                <OptionText darkTheme={darkTheme}>Home</OptionText>
              </ModalNavbarOption>
            </Link>
            <Link to="/trending" className="nav-link">
              <ModalNavbarOption darkTheme={darkTheme}>
                <HiFire
                  color={darkTheme ? '#f9f9f9' : '#181818'}
                  fontSize={30}
                />
                <OptionText darkTheme={darkTheme}>Trending</OptionText>
              </ModalNavbarOption>
            </Link>
            <Link to="/gaming" className="nav-link">
              <ModalNavbarOption darkTheme={darkTheme}>
                <SiYoutubegaming
                  color={darkTheme ? '#f9f9f9' : '#181818'}
                  fontSize={30}
                />
                <OptionText darkTheme={darkTheme}>Gaming</OptionText>
              </ModalNavbarOption>
            </Link>
            <Link to="/saved-videos" className="nav-link">
              <ModalNavbarOption darkTheme={darkTheme}>
                <MdPlaylistAdd
                  color={darkTheme ? '#f9f9f9' : '#181818'}
                  fontSize={30}
                />
                <OptionText darkTheme={darkTheme}>Saved Videos</OptionText>
              </ModalNavbarOption>
            </Link>
          </ModalOptionsContainer>

          <FooterSection>
            <FooterTitle darkTheme={darkTheme}>CONTACT US</FooterTitle>
            <FooterIconsContainer>
              <FooterIcon facebook>
                <RiFacebookFill fontSize={26} color="#ffffff" />
              </FooterIcon>
              <FooterIcon twitter>
                <RiTwitterFill fontSize={26} color="#ffffff" />
              </FooterIcon>
              <FooterIcon linkedin>
                <RiLinkedinFill fontSize={26} color="#ffffff" />
              </FooterIcon>
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
