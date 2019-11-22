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

const NetflixArea = styled.div`
   width: 1200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 50px;
`;

const NetflixHeader = styled.div`
   width: 900px;
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
  cursor: pointer;
  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const MusicArea = styled.div`
   width: 1200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 50px;
`;

const MusicHeader = styled.div`
   width: 980px;
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

  const netflixImgSrc = [
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXNfXIeYCuLs9ohoqxxTLZxq9H6Sue_d3sztJSitWkKGZHeja4UFUYHOOpEFo-ntRv7ekEGAb0uQF2lfVEcfukhCB4o.webp?r=fcd`,
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVBI7WtjpCxvI0wwaA9sFPqbSBp_JklkcnH4I5kWvrOE0MNrrwn9cNeUlEiyGuPBc8D9SdhcfOQLyOrTutlMLJoxzdGBWXydfE9XDo8vgqIumKjmko_jerGy_tJs.jpg?r=79e`,
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYvl-pyVDFhqN7ks-vaJumWWK16jowq8QtxmpS279LaE27UAh04fTgwm1ERyJCoJsEM7KjerL_aAgcpEFE7H7BEV9mMr9HmSzM-UV0PzH-deWokW27xIxJlyHQrl.jpg?r=58d`,
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdfZSymn-nYzFNtXR35cKtsCFQZSRXcNRN6X4anYtBJ-NipWSYBRVIYlEesAzjpLIVXDPpBytj03cfB55RHR_0UTFZM.webp?r=a06`,
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABZkigP2t3D49Ilz4qaU3Sqy4ooqeBsCJ42MriNXptnULygWjADjI3DENUZWTo_0yLfd0ZQ0T6mC6wnabiHsk9flQ98M-A6MuhrF-pdC7TLdTaZoDN5QUXKeLIqWg.jpg?r=a72`,
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSdRt7iG0WbUmoBonVmSPfkA0DNOubx7uLK7vJr5Ejs26p1dkXpmE-FpPhD9PcONoGH-daBwIJeHyFzvAyMF-9sjMD4.webp?r=384`,
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeveVU0HijfVOvPWZOst2uI30wcy4c3gpc5ZDKPF2QxlO8PpTP4nPx8gVhHm8GZmdQma40mBsSZjRoeCtIT0VvuVeCc.webp?r=dff`,
    `https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTG1sKQgLeIUK0kc2GUfEfnEMeHhlwouZs2C8Qi-ovrtWyVbz-bNt3SNVfUGkkFXngk07tuVHhgt7crlbWq7Dua3CsHcTfxvM5lNQcmB-F_3t2LFUXLygACD401a.jpg?r=89f`,
  ];

  const musicImgSrc = [
    `https://musicmeta-phinf.pstatic.net/album/000/439/439225.jpg?type=r204Fll&v=20190523034503`,
    `https://musicmeta-phinf.pstatic.net/album/003/056/3056861.jpg?type=r204Fll&v=20191111230709`,
    `https://musicmeta-phinf.pstatic.net/album/000/411/411459.jpg?type=r204Fll&v=20191107011311`,
    `https://musicmeta-phinf.pstatic.net/album/001/772/1772995.jpg?type=r204Fll&v=20190606213218`,
    `https://musicmeta-phinf.pstatic.net/album/002/566/2566992.jpg?type=r204Fll&v=20191108013210`,
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

        <NetflixArea>
          <NetflixHeader>
            당신을 위한 추천 넷플릭스 영상
          </NetflixHeader>
          <NetflixImageArea>
            {netflixImgSrc.map(imgSrc =>
              <a href={`https://www.netflix.com/title/${80204927}`} target={`blank`}>
                <NetflixImage src={imgSrc} video_id={`80204927`}/>
              </a>
            )}
          </NetflixImageArea>
        </NetflixArea>

        <MusicArea>
          <MusicHeader>
            당신이 본 영화의 OST, 들어 보셨나요?
          </MusicHeader>
          <MusicImageArea>
            {musicImgSrc.map(imgSrc =>
              <MusicImage src={imgSrc}/>
            )}
          </MusicImageArea>
        </MusicArea>
      </Container>


    </Screen>
  );
};

export default Home;

