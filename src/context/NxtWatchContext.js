import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  savedVideos: [],
  selectedTab: 'HOME',
  toggleTheme: () => {},
  saveVideo: () => {},
  onChangeTab: () => {},
})

export default NxtWatchContext
