import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingVideo,
  GamingVideoTitle,
  GamingVideoThumbnail,
  GamingVideoDetailsContainer,
  GamingVideoViews,
} from './styledComponents'

const GamingVideoItem = props => {
  const {video} = props
  const {id, title, viewCount, thumbnailUrl} = video
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <GamingVideo>
            <Link to={`/videos/${id}`} className="nav-link">
              <GamingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoDetailsContainer>
                <GamingVideoTitle darkTheme={darkTheme}>
                  {title}
                </GamingVideoTitle>
                <GamingVideoViews darkTheme={darkTheme}>
                  {viewCount} Watching Worldwide
                </GamingVideoViews>
              </GamingVideoDetailsContainer>
            </Link>
          </GamingVideo>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
