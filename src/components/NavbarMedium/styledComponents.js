import styled from 'styled-components'

export const HomeNavbar = styled.nav`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  flex-shrink: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const FooterSection = styled.div`
  padding: 140px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const SocialMediaImage = styled.img`
  height: 40px;
  width: 40px;
`

export const FooterTitle = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
`
export const FooterIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterDescription = styled.p`
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#231f20')};
`
export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 0;
`
export const NavbarOption = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`

export const NavbarOptionText = styled.p`
  margin-left: 20px;
  text-align: left;
  width: 100px;
`

export const HomeOptionText = styled(NavbarOptionText)`
  color: ${props => {
    const {darkTheme, selectedTab} = props
    const themeColor = darkTheme ? '#f9f9f9' : '#181818'
    if (selectedTab === 'HOME') {
      return '#ff0000'
    }
    return themeColor
  }};
`
export const GamingOptionText = styled(NavbarOptionText)`
  color: ${props => {
    const {darkTheme, selectedTab} = props
    const themeColor = darkTheme ? '#f9f9f9' : '#181818'
    if (selectedTab === 'GAMING') {
      return '#ff0000'
    }
    return themeColor
  }};
`
export const PlaylistOptionText = styled(NavbarOptionText)`
  color: ${props => {
    const {darkTheme, selectedTab} = props
    const themeColor = darkTheme ? '#f9f9f9' : '#181818'
    if (selectedTab === 'PLAYLIST') {
      return '#ff0000'
    }
    return themeColor
  }};
`
export const TrendingOptionText = styled(NavbarOptionText)`
  color: ${props => {
    const {darkTheme, selectedTab} = props
    const themeColor = darkTheme ? '#f9f9f9' : '#181818'
    if (selectedTab === 'TRENDING') {
      return '#ff0000'
    }
    return themeColor
  }};
`

export const HomeOption = styled(NavbarOption)`
  background-color: ${props => {
    const {darkTheme, selectedTab} = props
    const themeColor = darkTheme ? '#424242' : '#f1f5f9'
    if (selectedTab === 'HOME') {
      return themeColor
    }
    return null
  }};
  font-weight: ${props => (props.selectedTab === 'HOME' ? '600' : '500')};
`
export const GamingOption = styled(NavbarOption)`
  background-color: ${props => {
    const {darkTheme, selectedTab} = props

    const themeColor = darkTheme ? '#424242' : '#f1f5f9'
    if (selectedTab === 'GAMING') {
      return themeColor
    }
    return null
  }};
  font-weight: ${props => (props.selectedTab === 'GAMING' ? '600' : '500')};
`
export const SavedVideosOption = styled(NavbarOption)`
  background-color: ${props => {
    const {darkTheme, selectedTab} = props

    const themeColor = darkTheme ? '#424242' : '#f1f5f9'
    if (selectedTab === 'PLAYLIST') {
      return themeColor
    }
    return null
  }};
  font-weight: ${props => (props.selectedTab === 'PLAYLIST' ? '600' : '500')};
`

export const TrendingOption = styled(NavbarOption)`
  background-color: ${props => {
    const {darkTheme, selectedTab} = props

    const themeColor = darkTheme ? '#424242' : '#f1f5f9'
    if (selectedTab === 'TRENDING') {
      return themeColor
    }
    return null
  }};
  font-weight: ${props => (props.selectedTab === 'TRENDING' ? '600' : '500')};
`
