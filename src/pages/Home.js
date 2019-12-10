import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {leftArrow,rightArrow} from '../images';
import Header from './components/Header';
import MovieModal from './components/MovieModal';

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

  // 슬라이더용 변수
  const [movieCount, setMovieCount] = useState(0);
  const [netflixCount, setNetflixCount] = useState(0);
  const [musicCount, setMusicCount] = useState(0);

  // 메인화면 데이터
  const [movieData, setMovieData] = useState([]);
  const [netflixData, setNetflixData] = useState([]);
  const [musicData, setMusicData] = useState([]);


  useEffect(() => {
    if(localStorage.MuflixLoginStatus === undefined) {
      localStorage.MuflixLoginStatus = false;
      localStorage.MuflixLoginId = '';
    }

    setRenderingData();

  }, []);

  const setRenderingData = async () => {
    const {data} = await axios.get(`http://1.201.141.81:5902/`);

    setMovieData(data.movieData.reverse());
    setNetflixData(data.netflixData);
    setMusicData(data.musicData);

    // axios.post(`http://1.201.141.81:5902/comments`,{
    //   'movie_id': 136873,
    //   'user_id': 'sangyousaase',
    //   'star_num' : 5, //0~5 정수
    //   'content' : '사융니그러지마sadsasd'
    // });
  };

  const [clickedMovieId, setClickedMovieId] = useState(0);


  const openMovieModal = (movieId) => {
    if(movieId === 136873) {
      updateNetFlixVedio();
    }

    setClickedMovieId(movieId);
  };

  const updateNetFlixVedio = async () => {
    const {data} = await axios.get(`http://1.201.141.81:5902/getNetflixMovie`);
    setNetflixData(data.netflixData);
  }

  useEffect(() => {
    console.log('clickedMovieId',clickedMovieId);
    if(clickedMovieId!==0) {
      setModalState(true);
    }
  }, [clickedMovieId]);

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
            {movieData.slice(movieCount,movieCount+4).map(data =>
              <MovieImage src={data['movie_thumbnail_url']} onClick={()=>{openMovieModal(data['movie_id'])}}/>
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
            onClick={() => {netflixCount!==16 && setNetflixCount(netflixCount+8)}}
          />
          <NetflixImageArea>
            {
              netflixData.slice(netflixCount,netflixCount+8).map(data =>
              <a href={`https://www.netflix.com/title/${data['vedio_id']}`} target={`blank`}>
                <NetflixImage src={data['netflix_thumbnail_url']} video_id={data['vedio_id']}/>
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
            {musicData.slice(musicCount,musicCount+5).map(data =>
              <a href={data['music_link_url']}>
                <MusicImage src={data['music_thumbnail_url']}/>
              </a>
            )}
          </MusicImageArea>
        </MusicArea>
      </Container>

      <MovieModal isOpen={isModalOpen} close={closeMovieModal} movieId={clickedMovieId}/>
    </Screen>
  );
};

export default Home;

