import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 20px 40px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 30px 60px 30px 60px;
  }
`
export const NavbarCompanyLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const NavbarOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavbarModalContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  padding: 10px 20px 30px 20px;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  min-width: 200px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  margin-top: 10px;
`
export const ModalNavbarOption = styled.li`
  display: flex;
  justify-content:center;
  align-items: center;
  width:100%;
  margin-bottom:10px;
 
  font-weight: 500;
  :hover{
      background-color: ${props => (props.darkTheme ? '#424242' : '#f1f5f9')} ;
      font-weight:600;
  }
  }
`
export const ModalOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.home ? 'flex-start' : 'center')};
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`
export const OptionText = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  margin-left: 20px;
  text-align: left;
  width: 100px;
`
export const NavbarProfileIcon = styled.img`
  height: 30px;
`
export const LogoutButton = styled.button`
  border: 2px solid ${props => (props.darkTheme ? '#d7dfe9' : '#3b82f6')};
  border-radius: 6px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#3b82f6')};
  background-color: transparent;
  padding: 10px 20px 10px 20px;
  outline: none;
  cursor: pointer;
`

export const NavbarMediumOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px 20px 30px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.1);
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const ConfirmationText = styled.p`
  color: ${props => (props.darkTheme ? '#94a3b8' : '#00306e')};
  font-size: 16px;
  font-weight: 500;
`
export const LogoutButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CancelButton = styled.button`
  border: 2px solid #94a3b8;
  color: #94a3b8;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  background-color: transparent;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  padding: 10px 20px 10px 20px;
  border: none;
  font-size: 16px;
  margin-left: 20px;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
`
