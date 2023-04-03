import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingVideo,
  GamingVideoTitle,
  GamingVideoThumbnail,
  GamingVideoDetailsContainer,
  GamingVideoViews,
  WorldWideText,
  GamingDescription,
} from './styledComponents'

const GamingVideoItem = props => {
  const {video} = props
  const {title, viewCount, thumbnailUrl} = video
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <GamingVideo>
            <GamingVideoThumbnail src={thumbnailUrl} />
            <GamingVideoDetailsContainer>
              <GamingVideoTitle darkTheme={darkTheme}>{title}</GamingVideoTitle>
              <GamingDescription>
                <GamingVideoViews darkTheme={darkTheme}>
                  {viewCount} Watching
                </GamingVideoViews>
                <WorldWideText darkTheme={darkTheme}>Worldwide</WorldWideText>
              </GamingDescription>
            </GamingVideoDetailsContainer>
          </GamingVideo>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
