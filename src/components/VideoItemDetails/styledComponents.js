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
export const VideoTitle = styled.p`
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
  font-weight: ${props => props.fontWeight};
  display: flex;
  align-items: center;
  color: ${props => props.color};
  margin-bottom: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const IconContainer = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
  margin-right: 10px;
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
