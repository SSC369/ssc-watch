import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Video,
  VideoChannelContainer,
  VideoChannelImage,
  VideoDetailsContainer,
  VideoChannel,
  VideoTitle,
  VideoThumbnail,
  DateViewsContainer,
  VideoViews,
  VideoPublishedAt,
} from './styledComponents'

const VideoItem = props => {
  const {video} = props
  const {
    channelName,
    channelProfileImageUrl,
    thumbnailUrl,
    publishedAt,
    title,
    viewCount,
  } = video
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <Video>
            <VideoThumbnail src={thumbnailUrl} />
            <VideoChannelContainer>
              <VideoChannelImage src={channelProfileImageUrl} />
              <VideoDetailsContainer>
                <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                <VideoChannel darkTheme={darkTheme}>{channelName}</VideoChannel>
                <DateViewsContainer darkTheme={darkTheme}>
                  <VideoViews>{viewCount} views</VideoViews>
                  <VideoPublishedAt>{publishedAt}</VideoPublishedAt>
                </DateViewsContainer>
              </VideoDetailsContainer>
            </VideoChannelContainer>
          </Video>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
