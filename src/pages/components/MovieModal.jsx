import React from 'react';
import styled from 'styled-components';
import {closeButton} from '../../images';

const ModalWrapper = styled.div`
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.16);
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  width: 65%;
  
  max-height: 800px;
  overflow-y: auto;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
  z-index: 100;
`;

const CloseButton = styled.img.attrs({
  src: closeButton
})`
  width: 25px;
  height: 25px;
  
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
`;

const MovieInfoContainer = styled.div`
  padding: 60px 40px 10px 40px;
  display: flex;
  flex-direction: row;
`;

const MovieImage = styled.img`
  width: 230px;
  height: 336px;
`;

const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const DetailText = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;

const MovieTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 15px 0;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 15px;
  width: 700px;
`;

const OpenDate = styled.div`
  display: flex;
  flex-direction: row;
`;

const Actors = styled.div`
  display: flex;
  flex-direction: row;
`;

const RunningTime = styled.div`
  display: flex;
  flex-direction: row;
`;

const Summary = styled.div`
`;


const MovieModal = ({isOpen,close}) => {

  const summary = `
    내 마법의 힘은 어디서 왔을까?
    나를 부르는 저 목소리는 누구지?
    
    어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 왕국을 위협한다.
    트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과 진실을 찾아 떠나야한다고 조언한다.
    
    위험에 빠진 아렌델 왕국을 구해야만 하는 엘사와 안나는 숨겨진 과거의 진실을 찾아
    크리스토프, 올라프 그리고 스벤과 함께 위험천만한 놀라운 모험을 떠나게 된다.
    자신의 힘을 두려워했던 엘사는 이제 이 모험을 헤쳐나가기에 자신의 힘이 충분하다고 믿어야만 하는데…
    
    11월, 두려움을 깨고 새로운 운명을 만나다!
  `;

  return (
    <div>
      {
        isOpen ?
          <ModalWrapper>
            <ModalOverlay/>
            <ModalContainer>
              <MovieInfoContainer>
                <MovieImage src={`http://image2.megabox.co.kr/mop/poster/2019/37/FC0155-CBED-48D6-B4F8-0F686D79CE86.large.jpg`}/>
                <MovieDetailContainer>
                  <MovieTitle>겨울왕국2</MovieTitle>
                  <OpenDate>
                    <DetailText>개봉일</DetailText>
                    2019.11.21
                  </OpenDate>
                  <Actors>
                    <DetailText>출연진</DetailText>
                    크리스틴 벨, 이디나 멘젤, 조시 게드, 조나단 그로프진
                  </Actors>
                  <RunningTime>
                    <DetailText>상영시간</DetailText>
                    103분
                  </RunningTime>
                  <Summary>
                    <DetailText>줄거리</DetailText>
                    {summary}
                  </Summary>
                </MovieDetailContainer>

              </MovieInfoContainer>

              <CloseButton onClick={close}/>
            </ModalContainer>
          </ModalWrapper>
        : null
      }
    </div>
  );
};

export default MovieModal;

