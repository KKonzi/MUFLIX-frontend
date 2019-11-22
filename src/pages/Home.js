import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Header = styled.div`
  position: absolute;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Container = styled.div`
   width: 1024px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const MovieArea = styled.div`
   width: 1200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 70px;
`;

const MovieHeader = styled.div`
   width: 890px;
`;

const MovieImageArea = styled.div`
   width: 1000px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;

const MovieImage = styled.img`
  width: 207px;
  height: 302px;
  margin: 10px;
  cursor: pointer;
  
  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Home = () => {
    const movieImgSrc = [
      `http://image2.megabox.co.kr/mop/poster/2019/37/FC0155-CBED-48D6-B4F8-0F686D79CE86.large.jpg`,
      `http://image2.megabox.co.kr/mop/poster/2019/9C/551031-55AA-44A4-A56B-DD5C99114721.large.jpg`,
      `http://image2.megabox.co.kr/mop/poster/2019/0C/14F5EA-C805-42F0-83C9-A91FE7721B7A.large.jpg`,
      `http://image2.megabox.co.kr/mop/poster/2019/1D/A14577-C8BF-4416-9CD8-21433730A1EA.large.jpg`,
    ];

    return (
        <Screen>
          <Header></Header>
          <Container>
            <MovieArea>
              <MovieHeader>현재 상영중인 영화</MovieHeader>
              <MovieImageArea>
                {movieImgSrc.map(imgSrc =>
                  <MovieImage src={imgSrc}/>
                )}
              </MovieImageArea>
            </MovieArea>
          </Container>
        </Screen>
    );
};

export default Home;
