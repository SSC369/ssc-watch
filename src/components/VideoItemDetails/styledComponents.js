import styled from 'styled-components'

export const VideoItemDetailsResponsiveContainer = styled.div`
  display: flex;
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 30px 30px 100px 30px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoTitle = styled.h1`
  font-size: 20px;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#212121')};
  margin-bottom: 0;
`
export const VideoItemDetailsText = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8' : '#64748b')};
  font-size: 16px;
  margin-left: 4px;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const RowAlign = styled.div`
  display: flex;
  align-items: center;
`
export const VideoPublishedDate = styled.p`
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
  font-size: 16px;
`
export const VideoViewCount = styled.p`
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
  font-size: 16px;
`
export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding-left: 0;
`
export const LikeText = styled.label`
  color: ${props => {
    const {likeClicked, darkTheme} = props
    if (likeClicked) {
      return '#2563eb'
    }
    if (darkTheme) {
      return '#cbd5e1'
    }
    return '#475569'
  }};
  font-weight: ${props => (props.likeClicked ? '500' : '400')};
  font-size: 14px;
  margin-bottom: 4px;
`
export const DisLikeText = styled.label`
  color: ${props => {
    const {dislikeClicked, darkTheme} = props
    if (dislikeClicked) {
      return '#2563eb'
    }

    if (darkTheme) {
      return '#cbd5e1'
    }
    if (!darkTheme) {
      return '#475569'
    }
    return null
  }};
  font-weight: ${props => (props.dislikeClicked ? '500' : '400')};
  font-size: 14px;
  margin-bottom: 4px;
`
export const SaveText = styled.label`
  color: ${props => {
    const {saveClicked, darkTheme} = props
    if (saveClicked) {
      return '#2563eb'
    }
    if (darkTheme) {
      return '#cbd5e1'
    }
    return '#475569'
  }};
  font-weight: ${props => (props.saveClicked ? '500' : '400')};
  font-size: 14px;
  margin-bottom: 4px;
  width: 50px;
`
export const IconContainer = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
  margin-right: 20px;
`
export const VideoChannelContainer = styled.div`
  padding-top: 30px;
  display: flex;
  margin-top: 20px;
  border-top: 2px solid #cccccc;
`
export const VideoChannelThumbnail = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`
export const ChannelDetailsContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const ChannelName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
`
export const ChannelDescription = styled.p`
  margin-top: 0;
  font-size: 14px;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#212121')};
`
export const ChannelSubs = styled.p`
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
`
