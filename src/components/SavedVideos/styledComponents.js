import styled from 'styled-components'

export const SavedVideosResponsiveContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SavedVideosList = styled.ul`
  padding: 30px;
  list-style-type: none;
`
