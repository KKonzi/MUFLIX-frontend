import React from 'react';
import styled from 'styled-components';
import {logo,leftArrow,rightArrow} from '../../images'

const HeaderContainer = styled.div`
  position: absolute;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const HeaderContent = styled.div`
  width: 1050px;
  //background-color: red;  
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img.attrs({
  src: logo
})`
  height: 35px;
`

const LoginForm = styled.div`
  display: flex;
`

const IDInputBox = styled.input.attrs({
  type: 'text'
})`
  height: 20px;
  width: 110px;
  margin-left: 15px;

  border: 1px solid lightgrey;
  &:active,
  &:focus {
    outline: none;
  }
`;

const PWInputBox = styled.input.attrs({
  type: 'password'
})`
  height: 20px;
  width: 110px;
  margin-left: 15px;
  border: 1px solid lightgrey;
  &:active,
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.div`
  margin-left: 15px;
  height: 18px; 
  width: 50px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  
  padding-top: 2px;
  letter-spacing: -0.7px;
  
  display-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  font-size: 11px;
  color: #2e2e2e;
  
  cursor: pointer;
`;


const Header = () => {

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImage/>
        <LoginForm>
          <IDInputBox type="password" placeholder={"ID"}/>
          <PWInputBox type="text" placeholder={"PASSWORD"}/>
          <LoginButton>로그인</LoginButton>
        </LoginForm>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
