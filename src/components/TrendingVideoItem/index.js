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
          <TrendingVideo>
            <TrendingVideoThumbnail src={thumbnailUrl} />
            <TrendingVideoChannelContainer>
              <VideoChannelImage src={channelProfileImageUrl} />
              <TrendingVideoDetailsContainer>
                <TrendingVideoTitle darkTheme={darkTheme}>
                  {title}
                </TrendingVideoTitle>
                <VideoChannel darkTheme={darkTheme}>{channelName}</VideoChannel>
                <DateViewsContainer darkTheme={darkTheme}>
                  <VideoViews>{viewCount} views</VideoViews>
                  <VideoPublishedAt>{publishedAt}</VideoPublishedAt>
                </DateViewsContainer>
              </TrendingVideoDetailsContainer>
            </TrendingVideoChannelContainer>
          </TrendingVideo>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
