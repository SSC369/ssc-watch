import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {
  SavedVideo,
  SavedVideoThumbnail,
  SavedVideoDetails,
  SavedVideoTitle,
  SavedVideoChannel,
  SavedDateViewsContainer,
  SavedVideoViews,
  SavedVideoPublishedAt,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const SavedVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {video} = props
      const {
        id,
        thumbnailUrl,
        title,
        viewCount,
        publishedAt,
        channelName,
      } = video
      const {darkTheme} = value
      console.log(darkTheme)
      return (
        <Link to={`/videos/${id}`} className="nav-link">
          <SavedVideo>
            <SavedVideoThumbnail src={thumbnailUrl} />
            <SavedVideoDetails>
              <SavedVideoTitle darkTheme={darkTheme}>{title}</SavedVideoTitle>
              <SavedVideoChannel darkTheme={darkTheme}>
                {channelName}
              </SavedVideoChannel>
              <SavedDateViewsContainer darkTheme={darkTheme}>
                <SavedVideoViews>{viewCount}</SavedVideoViews>
                <BsDot
                  color={darkTheme ? '#cbd5e1' : '#475569'}
                  fontSize={20}
                />
                <SavedVideoPublishedAt>{publishedAt}</SavedVideoPublishedAt>
              </SavedDateViewsContainer>
            </SavedVideoDetails>
          </SavedVideo>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideoItem
