import styled from 'styled-components'

export const NoVideosViewContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const NoVideosImage = styled.img`
  width: 50%;
  max-width: 400px;
`
export const NoVideosTitle = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
`
export const NoVideosDescription = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#cccccc' : '#212121')};
`
export const RetryButton = styled.button`
  border: none;
  color: #f9f9f9;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  padding: 15px 30px 15px 30px;
  background-color: #4f46e5;
`
export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeResponsiveContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  justify-content: center;
`
export const HomeDetailsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const PremiumMembershipContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  height: 300px;
  background-size: cover;
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const PremiumImage = styled.img`
  width: 100px;
`
export const PremiumDescription = styled.p`
  color: '#181818';
  font-size: 16px;
`
export const GetItButton = styled.button`
  border: 2px solid '#181818';
  color: '#181818';
  background-color: transparent;
  padding: 10px 20px 10px 20px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`
export const PremiumCloseButton = styled.button`
  background-color: transparent;
  border: none;
`
export const PremiumContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeNavbar = styled.nav`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  flex-shrink: 0;
  height: 100vh;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const FooterSection = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const FooterTitle = styled.h1`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
`
export const FooterIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
    if (props.facebook) {
      return '#00306e'
    }
    if (props.twitter) {
      return '#3b82f6'
    }
    return ' #3366ff'
  }};
  height: 40px;
  width: 40px;
  border-radius: 200px;
`

export const FooterDescription = styled.p`
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#231f20')};
`

export const SearchInputContainer = styled.form`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 600px;
`
export const HomeInputElement = styled.input`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  border: none;
  padding-left: 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  width: 90%;
  border: 2px solid ${props => (props.darkTheme ? '#212121' : '#d7dfe9')};
  height: 36px;
`

export const SearchButton = styled.button`
  cursor: pointer;
  outline: none;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  background-color: ${props => (props.darkTheme ? '#231f20' : '#f1f1f1')};
  border: 2px solid ${props => (props.darkTheme ? '#212121' : '#d7dfe9')};
  border-left: 1px;
`
export const VideosResponsiveContainer = styled.div`
  padding: 10px 30px 30px 30px;
  display: flex;
  flex-direction: column;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`
