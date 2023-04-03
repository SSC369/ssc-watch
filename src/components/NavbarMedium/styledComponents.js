import styled from 'styled-components'

export const HomeNavbar = styled.nav`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  flex-shrink: 0;

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
