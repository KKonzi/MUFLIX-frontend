import React, {useState} from 'react';
import styled from 'styled-components';
import {leftArrow,rightArrow} from '../images';
import Header from './components/Header';
import MovieModal from './components/MovieModal';
import {movieImgSrc, netflixImgSrc, musicImgSrc} from './data'


const Screen = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Container = styled.div`
   width: 1024px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 75px;
   margin-bottom: 100px;
`;

const MovieArea = styled.div`
   width: 1200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;
`;

const MovieHeader = styled.div`
  width: 890px;
  font-size: 20px;
  color: white;   
  font-weight: 500;
`;

const MovieLeftArrow = styled.img.attrs({
  src: leftArrow
})`
  position: absolute;
  top: 158px;
  left: 110px;
  
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const MovieRightArrow = styled.img.attrs({
  src: rightArrow
})`
  position: absolute;
  top: 158px;
  right: 110px;
  
  width: 40px;
  height: 40px;
  cursor: pointer;
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
  
  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  
  cursor: pointer;
`;

const NetflixArea = styled.div`
   width: 1200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 50px;
   position: relative;
`;

const NetflixHeader = styled.div`
   width: 900px;
  color: white;   
  font-size: 20px;
  font-weight: 500;
`;

const NetFlixLeftArrow = styled.img.attrs({
  src: leftArrow
})`
  position: absolute;
  top: 155px;
  left: 100px;
  
  width: 35px;
  height: 35px;
  cursor: pointer;

`;

const NetFlixRightArrow = styled.img.attrs({
  src: rightArrow
})`
  position: absolute;
  top: 155px;
  right: 100px;
  
  width: 40px;
  height: 40px;
  cursor: pointer;
  
`;

const NetflixImageArea = styled.div`
   width: 1000px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;

const NetflixImage = styled.img`
  width: 210px;
  height: 120px;
  margin: 10px;
  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  
  cursor: pointer;
`;

const MusicArea = styled.div`
   width: 1200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 50px;
   position: relative;
`;

const MusicHeader = styled.div`
   width: 980px;
   color: white;
   font-size: 20px;
   font-weight: 500;
`;

const MusicLeftArrow = styled.img.attrs({
  src: leftArrow
})`
  position: absolute;
  top: 100px;
  left: 60px;
  
  width: 35px;
  height: 35px;
  cursor: pointer;

`;

const MusicRightArrow = styled.img.attrs({
  src: rightArrow
})`
  position: absolute;
  top: 100px;
  right: 60px;
  
  width: 40px;
  height: 40px;
  cursor: pointer;

`;

const MusicImageArea = styled.div`
   width: 1000px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;

const MusicImage = styled.img`
  width: 180px;
  height: 180px;
  margin: 10px;
  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
`;

const Home = () => {
  const [isModalOpen, setModalState] = useState(false);
  const [movieCount, setMovieCount] = useState(0);
  const [netflixCount, setNetflixCount] = useState(0);
  const [musicCount, setMusicCount] = useState(0);


  const openMovieModal = (movieId) => {
    setModalState(true);
  };

  const closeMovieModal = () => {
    setModalState(false);
  };



  return (
    <Screen>
      <Header/>
      <Container>
        <MovieArea>
          <MovieHeader>현재 상영중인 영화</MovieHeader>
          <MovieLeftArrow
            style={{opacity: (!movieCount?0.5:1)}}
            onClick={() => {movieCount && setMovieCount(0)}}
          />
          <MovieRightArrow
            style={{opacity: (movieCount?0.5:1)}}
            onClick={() => {!movieCount && setMovieCount(4)}}
          />
          <MovieImageArea>
            {movieImgSrc.slice(movieCount,movieCount+4).map(imgSrc =>
              <MovieImage src={imgSrc} onClick={()=>{openMovieModal(1)}}/>
            )}
          </MovieImageArea>
        </MovieArea>

        <NetflixArea>
          <NetflixHeader>
            당신을 위한 추천 넷플릭스 영상
          </NetflixHeader>
          <NetFlixLeftArrow
            style={{opacity: (!netflixCount?0.5:1)}}
            onClick={() => {netflixCount && setNetflixCount(netflixCount-8)}}
          />
          <NetFlixRightArrow
            style={{opacity: (netflixCount===16?0.5:1)}}
            onClick={() => {netflixCount===16 ? setNetflixCount(0) : setNetflixCount(netflixCount+8)}}
          />
          <NetflixImageArea>
            {
              netflixImgSrc.slice(netflixCount,netflixCount+8).map(imgSrc =>
              <a href={`https://www.netflix.com/title/${80204927}`} target={`blank`}>
                <NetflixImage src={imgSrc} video_id={`80204927`}/>
              </a>
              )
            }
          </NetflixImageArea>
        </NetflixArea>

        <MusicArea>
          <MusicHeader>
            당신이 본 영화의 OST, 들어 보셨나요?
          </MusicHeader>
          <MusicLeftArrow
            style={{opacity: (!musicCount?0.5:1)}}
            onClick={() => {musicCount && setMusicCount(0)}}
          />
          <MusicRightArrow
            style={{opacity: (musicCount?0.5:1)}}
            onClick={() => {!musicCount && setMusicCount(5)}}
          />
          <MusicImageArea>
            {musicImgSrc.slice(musicCount,musicCount+5).map(imgSrc =>
              <a href="https://music.naver.com">
                <MusicImage src={imgSrc}/>
              </a>
            )}
          </MusicImageArea>
        </MusicArea>
      </Container>

      <MovieModal isOpen={isModalOpen} close={closeMovieModal}/>
    </Screen>
  );
};

export default Home;

