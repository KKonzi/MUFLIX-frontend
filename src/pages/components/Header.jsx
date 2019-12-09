import React, {useState} from 'react';
import styled from 'styled-components';
import {logo,leftArrow,rightArrow} from '../../images'

const HeaderContainer = styled.div`
  position: absolute;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-family: 'Noto Sans KR', sans-serif;
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

const HeaderButton = styled.div`
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
  color: white;
  
  cursor: pointer;
`;

const LoginLoader = styled.i`

`;

const LoginedUserContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const WelcomeUserText = styled.div`
  color: white;
  font-size: 14px;
`;

const Header = () => {
  const [showLoginLoader, setLoginLoader] = useState(false);
  const [isLogined, setLoginStatus] = useState(localStorage.MuflixLoginStatus===undefined ? false : localStorage.MuflixLoginStatus);
  const [idValue, setIdValue] = useState(localStorage.MuflixLoginId===undefined ? false : localStorage.MuflixLoginId);
  const [pwValue, setPwValue] = useState('1234');

  const onClickLoginButton = () => {
    console.log('login',idValue,pwValue);
    setLoginLoader(true);

    setTimeout(()=> {
      setLoginLoader(false);

      setLoginStatus(true);
      localStorage.MuflixLoginStatus = true;
      localStorage.MuflixLoginId = idValue;
      window.location.reload();
    },1200)
  };
  const onClickLogoutButton = () => {
    console.log('logout');

    setLoginStatus(false);
    localStorage.MuflixLoginStatus = false;
    localStorage.MuflixLoginId = '';

  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImage/>
        {
          isLogined ?
            <LoginedUserContent>
              <WelcomeUserText>{idValue}님 환영합니다!</WelcomeUserText>
              <HeaderButton>MY PAGE</HeaderButton>
              <HeaderButton onClick={onClickLogoutButton}>로그아웃</HeaderButton>
            </LoginedUserContent>
          :  <LoginForm>
                <IDInputBox type="password" placeholder={"ID"} onChange={(e)=>setIdValue(e.target.value)}/>
                <PWInputBox type="text" placeholder={"PASSWORD"} onChange={(e)=>setPwValue(e.target.value)}/>
                {
                  !showLoginLoader ?
                    <HeaderButton onClick={onClickLoginButton}>로그인</HeaderButton>
                    : <LoginLoader
                      className="fas fa-spinner fa-pulse"
                      style={{color: 'white', position: 'absolute', top: 22, right: 260}}/>
                }
              </LoginForm>
        }

      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
