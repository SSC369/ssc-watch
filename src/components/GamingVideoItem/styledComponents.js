import styled from 'styled-components'

export const GamingVideo = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 30%;
  padding: 20px;
  @media screen and (max-width: 575px) {
    width: 100px;
  }
`
export const GamingVideoThumbnail = styled.img`
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const GamingVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const GamingVideoTitle = styled.h1`
  margin-top: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`
export const GamingVideoViews = styled.p`
  font-size: 16px;
  color: #475569;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const WorldWideText = styled.p`
  color: #475569;
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    margin-left: 10px;
  }
`
export const GamingDescription = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`
