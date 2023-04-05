import {Link} from 'react-router-dom'
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
    id,
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
            <Link to={`/videos/${id}`} className="nav-link">
              <VideoThumbnail src={thumbnailUrl} />
              <VideoChannelContainer>
                <VideoChannelImage src={channelProfileImageUrl} />
                <VideoDetailsContainer>
                  <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                  <VideoChannel darkTheme={darkTheme}>
                    {channelName}
                  </VideoChannel>
                  <DateViewsContainer darkTheme={darkTheme}>
                    <VideoViews>{viewCount} views</VideoViews>
                    <VideoPublishedAt>{publishedAt}</VideoPublishedAt>
                  </DateViewsContainer>
                </VideoDetailsContainer>
              </VideoChannelContainer>
            </Link>
          </Video>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
