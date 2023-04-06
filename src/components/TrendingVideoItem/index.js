import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoChannelImage,
  VideoChannel,
  DateViewsContainer,
  VideoViews,
  VideoPublishedAt,
} from '../VideoItem/styledComponents'
import {
  TrendingVideoTitle,
  TrendingVideo,
  TrendingVideoThumbnail,
  TrendingVideoDetailsContainer,
  TrendingVideoChannelContainer,
} from './styledComponents'

const TrendingVideoItem = props => {
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
          <Link to={`/videos/${id}`} className="nav-link">
            <TrendingVideo>
              <TrendingVideoThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoChannelContainer>
                <VideoChannelImage
                  src={channelProfileImageUrl}
                  alt="channel logo"
                />
                <TrendingVideoDetailsContainer>
                  <TrendingVideoTitle darkTheme={darkTheme}>
                    {title}
                  </TrendingVideoTitle>
                  <VideoChannel darkTheme={darkTheme}>
                    {channelName}
                  </VideoChannel>
                  <DateViewsContainer darkTheme={darkTheme}>
                    <VideoViews>{viewCount} views</VideoViews>
                    <VideoPublishedAt>{publishedAt}</VideoPublishedAt>
                  </DateViewsContainer>
                </TrendingVideoDetailsContainer>
              </TrendingVideoChannelContainer>
            </TrendingVideo>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
