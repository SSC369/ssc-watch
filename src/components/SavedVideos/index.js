import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SavedVideoItem from '../SavedVideoItem'
import NavbarMedium from '../NavbarMedium'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosResponsiveContainer,
  SavedVideosContainer,
  SavedVideosList,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  NotSavedVideosViewContainer,
  NotSavedVideosImage,
  NotSavedVideosTitle,
  NotSavedVideosDescription,
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
        <NotSavedVideosViewContainer>
          <NotSavedVideosImage
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <NotSavedVideosTitle darkTheme={darkTheme}>
            No saved videos found
          </NotSavedVideosTitle>
          <NotSavedVideosDescription darkTheme={darkTheme}>
            Save your videos by clicking a button
          </NotSavedVideosDescription>
        </NotSavedVideosViewContainer>
      )

      return (
        <>
          <Header />
          <SavedVideosResponsiveContainer
            data-testid="savedVideos"
            darkTheme={darkTheme}
          >
            <NavbarMedium />
            <SavedVideosContainer>
              <SavedVideosHeadingContainer
                data-testid="banner"
                darkTheme={darkTheme}
              >
                <SavedVideosIconContainer darkTheme={darkTheme}>
                  <HiFire fontSize={30} color="#ff0000" />
                </SavedVideosIconContainer>
                <SavedVideosHeading darkTheme={darkTheme}>
                  Saved Videos
                </SavedVideosHeading>
              </SavedVideosHeadingContainer>
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
