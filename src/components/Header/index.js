import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookie from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSun} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {RiCloseFill} from 'react-icons/ri'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  Navbar,
  NavbarCompanyLogo,
  NavbarOptionsContainer,
  NavbarModalContainer,
  CloseButton,
  ModalNavbarOption,
  ModalOptionsContainer,
  OptionText,
  NavbarProfileIcon,
  NavbarMediumOptionsContainer,
  LogoutButton,
  LogoutModalContainer,
  ConfirmationText,
  LogoutButtonsContainer,
  CancelButton,
  ConfirmButton,
  IconButton,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {toggleTheme, darkTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookie.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <Navbar darkTheme={darkTheme}>
          <NavbarCompanyLogo
            src={
              darkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="company logo"
          />
          <NavbarMediumOptionsContainer>
            {darkTheme ? (
              <IconButton type="button" onClick={() => toggleTheme()}>
                <HiSun color="white" fontSize={30} />
              </IconButton>
            ) : (
              <IconButton type="button" onClick={() => toggleTheme()}>
                <FaMoon fontSize={20} />
              </IconButton>
            )}

            <NavbarProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutButton darkTheme={darkTheme} type="button">
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <LogoutModalContainer darkTheme={darkTheme}>
                  <ConfirmationText darkTheme={darkTheme}>
                    Are you sure you want to logout?
                  </ConfirmationText>
                  <LogoutButtonsContainer>
                    <CancelButton
                      darkTheme={darkTheme}
                      onClick={() => close()}
                      type="button"
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton onClick={onClickLogout} type="button">
                      Confirm
                    </ConfirmButton>
                  </LogoutButtonsContainer>
                </LogoutModalContainer>
              )}
            </Popup>
          </NavbarMediumOptionsContainer>

          <NavbarOptionsContainer>
            {darkTheme ? (
              <IconButton type="button" onClick={() => toggleTheme()}>
                <HiSun color="white" fontSize={20} />
              </IconButton>
            ) : (
              <IconButton type="button" onClick={() => toggleTheme()}>
                <FaMoon fontSize={20} />
              </IconButton>
            )}

            <Popup
              modal
              trigger={
                <IconButton type="button">
                  <GiHamburgerMenu
                    fontSize={20}
                    color={darkTheme ? '#ffffff' : '#000000'}
                  />
                </IconButton>
              }
            >
              {close => (
                <NavbarModalContainer darkTheme={darkTheme}>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseFill
                      color={darkTheme ? '#f9f9f9' : '#181818'}
                      fontSize={30}
                    />
                  </CloseButton>
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
                </NavbarModalContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <IconButton type="button">
                  <FiLogOut
                    fontSize={20}
                    color={darkTheme ? '#ffffff' : '#000000'}
                  />
                </IconButton>
              }
            >
              {close => (
                <LogoutModalContainer darkTheme={darkTheme}>
                  <ConfirmationText darkTheme={darkTheme}>
                    Are you sure you want to logout?
                  </ConfirmationText>
                  <LogoutButtonsContainer>
                    <CancelButton
                      darkTheme={darkTheme}
                      onClick={() => close()}
                      type="button"
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton onClick={onClickLogout} type="button">
                      Confirm
                    </ConfirmButton>
                  </LogoutButtonsContainer>
                </LogoutModalContainer>
              )}
            </Popup>
          </NavbarOptionsContainer>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
