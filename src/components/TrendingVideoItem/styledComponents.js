import styled from 'styled-components'

export const TrendingVideo = styled.li`
  display: flex;
  margin-bottom: 10px;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`
export const TrendingVideoThumbnail = styled.img`
  width: 50%;
  max-width: 400px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const TrendingVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`
export const TrendingVideoChannelContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  width: 40%;
  @media screen and (max-width: 576px) {
    margin-left: 0;
    width: 80%;
  }
`
export const TrendingVideoTitle = styled.h1`
  margin-top: 0;
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
