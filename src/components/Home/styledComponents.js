import styled from 'styled-components'

export const HomeResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const HomeDetailsContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
  max-width: 1000px;
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
  flex-direction: column;
  width: 300px;
  flex-shrink: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
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
