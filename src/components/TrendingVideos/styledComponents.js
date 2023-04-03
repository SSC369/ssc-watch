import styled from 'styled-components'

export const TrendingVideosResponsiveContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const TrendingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TrendingVideosHeadingContainer = styled.div`
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
export const TrendingIconContainer = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  background-color: ${props => (props.darkTheme ? '#000000' : '#d7dfe9')};
`
export const TrendingHeading = styled.h1`
  margin-left: 10px;
  font-size: 30px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`
export const TrendingVideosList = styled.ul`
  list-style-type: none;
  padding: 30px;
`
