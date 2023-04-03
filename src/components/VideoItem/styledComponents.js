import styled from 'styled-components'

export const Video = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 10px;
  padding: 20px;
  flex-grow: 1;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media screen and (width >= 576px) and (width <= 767px) {
    width: 46%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
  min-width: 200px;
  max-width: 400px;
`
export const VideoChannelContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
`
export const VideoChannelImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const VideoDetailsContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  margin-top: 0;
  font-size: 14px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const VideoChannel = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8 ' : '#475569')};
  font-weight: 500;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 4px;
`
export const DateViewsContainer = styled.div`
  color: ${props => (props.darkTheme ? '#94a3b8 ' : '#475569')};
  font-weight: 500;
  display: flex;
  align-items: center;
`
export const VideoViews = styled.p`
  font-size: 12px;
  margin-top: 4px;
`
export const VideoPublishedAt = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 4px;
`
