import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : ' #f9f9f9')};
  min-height: 100vh;
`
export const NotFoundVideosViewContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const NotFoundVideosImage = styled.img`
  width: 50%;
  max-width: 400px;
`
export const NotFoundVideosTitle = styled.h1`
  margin-bottom: 0;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
`
export const NotFoundVideosDescription = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#cccccc' : '#212121')};
`
