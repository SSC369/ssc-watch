import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  savedVideos: [],
  toggleTheme: () => {},
})

export default NxtWatchContext
