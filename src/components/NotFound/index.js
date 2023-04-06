import Header from '../Header'
import NavbarMedium from '../NavbarMedium'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundVideosViewContainer,
  NotFoundVideosImage,
  NotFoundVideosTitle,
  NotFoundVideosDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const NotFoundImgUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundContainer darkTheme={darkTheme}>
            <NavbarMedium />
            <NotFoundVideosViewContainer darkTheme={darkTheme}>
              <NotFoundVideosImage src={NotFoundImgUrl} alt="not found" />
              <NotFoundVideosTitle darkTheme={darkTheme}>
                Page Not Found
              </NotFoundVideosTitle>
              <NotFoundVideosDescription darkTheme={darkTheme}>
                we are sorry, the page you requested could not be found
              </NotFoundVideosDescription>
            </NotFoundVideosViewContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
