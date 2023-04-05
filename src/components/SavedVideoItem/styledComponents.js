import styled from 'styled-components'

export const SavedVideo = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const SavedVideoThumbnail = styled.img`
  width: 100%;
  width: 100%;
  min-width: 200px;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SavedVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const SavedVideoTitle = styled.p`
  margin-top: 0;
  font-size: 12px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const SavedVideoChannel = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8 ' : '#475569')};
  font-weight: 500;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const SavedDateViewsContainer = styled.div`
  color: ${props => (props.darkTheme ? '#94a3b8 ' : '#475569')};
  font-weight: 500;
  display: flex;
  align-items: center;
`
export const SavedVideoViews = styled.p`
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const SavedVideoPublishedAt = styled.p`
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
