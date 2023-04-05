import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SavedVideoItem from '../SavedVideoItem'
import NavbarMedium from '../NavbarMedium'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingVideosHeadingContainer,
  TrendingIconContainer,
  TrendingHeading,
} from '../TrendingVideos/styledComponents'
import {
  NoVideosDescription,
  NoVideosImage,
  NoVideosTitle,
  NoVideosViewContainer,
} from '../Home/styledComponents'
import {
  SavedVideosResponsiveContainer,
  SavedVideosContainer,
  SavedVideosList,
} from './styledComponents'

const SavedVideosRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value

      const renderSavedVideosData = () => (
        <SavedVideosList>
          {savedVideos.map(eachVideo => (
            <SavedVideoItem key={eachVideo.id} video={eachVideo} />
          ))}
        </SavedVideosList>
      )

      const renderEmptyView = () => (
        <NoVideosViewContainer>
          <NoVideosImage
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <NoVideosTitle darkTheme={darkTheme}>
            No Saved Video Found
          </NoVideosTitle>
          <NoVideosDescription darkTheme={darkTheme}>
            You can save your videos while watching them
          </NoVideosDescription>
        </NoVideosViewContainer>
      )

      return (
        <>
          <Header />
          <SavedVideosResponsiveContainer darkTheme={darkTheme}>
            <NavbarMedium />
            <SavedVideosContainer>
              <TrendingVideosHeadingContainer darkTheme={darkTheme}>
                <TrendingIconContainer darkTheme={darkTheme}>
                  <HiFire fontSize={30} color="#ff0000" />
                </TrendingIconContainer>
                <TrendingHeading darkTheme={darkTheme}>
                  Saved Videos
                </TrendingHeading>
              </TrendingVideosHeadingContainer>
              {savedVideos.length === 0
                ? renderEmptyView()
                : renderSavedVideosData()}
            </SavedVideosContainer>
          </SavedVideosResponsiveContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideosRoute
