import styled from 'styled-components'

export const GamingVideosResponsiveContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`

export const GamingVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const GamingVideosHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.darkTheme ? ' #424242' : ' #f1f1f1')};
  height: 160px;
  flex-grow: 1;
  padding-left: 30px;
  @media screen and (max-width: 575px) {
    height: 100px;
  }
`
export const GamingIconContainer = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  background-color: ${props => (props.darkTheme ? '#000000' : '#d7dfe9')};
`
export const GamingHeading = styled.h1`
  margin-left: 10px;
  font-size: 30px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`
export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`
