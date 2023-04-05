import styled from 'styled-components'

export const GamingVideo = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 30%;
  flex-grow: 1;

  @media screen and (min-width: 992px) {
    padding: 30px;
  }
`
export const GamingVideoThumbnail = styled.img`
  width: 100%;
  max-width: 300px;
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
  font-size: 10px;
  color: #475569;
  font-weight: 500;
  line-height: 2;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
