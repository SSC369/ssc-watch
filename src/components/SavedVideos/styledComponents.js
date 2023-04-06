import styled from 'styled-components'

export const SavedVideosResponsiveContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SavedVideosList = styled.ul`
  padding: 30px;
  list-style-type: none;
`
export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.darkTheme ? ' #424242' : ' #f1f1f1')};
  height: 160px;
  padding-left: 30px;
  @media screen and (max-width: 575px) {
    height: 100px;
  }
`
export const SavedVideosIconContainer = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  background-color: ${props => (props.darkTheme ? '#000000' : '#d7dfe9')};
`
export const SavedVideosHeading = styled.h1`
  margin-left: 10px;
  font-size: 30px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`
export const NotSavedVideosViewContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const NotSavedVideosImage = styled.img`
  width: 50%;
  max-width: 400px;
`
export const NotSavedVideosTitle = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
`
export const NotSavedVideosDescription = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#cccccc' : '#212121')};
`
