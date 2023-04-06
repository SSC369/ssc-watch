import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginFormCard = styled.form`
  padding: 30px;
  max-width: 600px;
  min-width: 300px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media screen and (min-width: 768px) {
    padding: 40px 48px 60px 48px;
  }
`

export const CompanyLogo = styled.img`
  width: 100px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin-bottom: 40px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
`
export const LabelText = styled.label`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const InputElement = styled.input`
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  height: 30px;
  border: 2px solid ${props => (props.darkTheme ? '#94a3b8' : '#f1f5f9')};
  cursor: pointer;
  outline: none;
  font-size: 12px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    height: 40px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
`
export const CheckboxElement = styled.input`
  height: 12px;
  width: 12px;
  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`
export const ShowPasswordText = styled.label`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  font-weight: 500;
  margin-left: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const LoginButton = styled.button`
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  width: 80%;
  height: 30px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
  }
`
export const WarningMessage = styled.p`
  margin-top: 6px;
  color: #ff0000;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const ErrorMessageContainer = styled.div`
  width: 80%;
`
