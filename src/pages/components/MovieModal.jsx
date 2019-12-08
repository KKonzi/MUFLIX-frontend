import React, {useState} from 'react';
import styled from 'styled-components';
import {closeButton, happyIcon, sadIcon} from '../../images';

const ModalWrapper = styled.div`
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  
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
  font-weight: 300;
`;

const DetailText = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;
const MovieDetailContainerHeader = styled.div`
  padding: 10px 0 15px 0;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 15px;
  width: 650px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MovieTitle = styled.div`
  font-size: 30px;
  font-weight: bold;

`;

const PreferenceButtonsContainer = styled.div`
  display: flex;
  color: #2e2e2e;
  font-weight: 400;
`;

const HappyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 4px
  border: 1px solid rgb(235,80,62);
  border-radius: 6px;
  margin-right: 8px;
  cursor: pointer;
`;

const HappyIcon = styled.img.attrs({
  src: happyIcon
})`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`

const SadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 4px
  border: 1px solid rgb(76,166,233);
  border-radius: 6px;
  cursor: pointer;
`;

const SadIcon = styled.img.attrs({
  src: sadIcon
})`
  width: 25px;
  height: 25px;
  margin-right: 5px;
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
  margin-top: 8px;
`;

const CommentContainer = styled.div`
  margin-top: 30px;
  padding: 0px 40px 60px 40px;
  width: calc(100% - 80px);
  
  display: flex;
  flex-direction: column;
`;

const UserCommentInputArea = styled.div`
  width: 100%
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  height: 140px;
  
  display: flex;
  align-items: center;
`;

const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  
`;

const UserId = styled.div`
  font-wight: 500px;
  color: #2e2e2e;
  font-size: 18px;
`;

const StarContainer = styled.select`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  
  &:active,
  &:focus {
    outline: none;
  };
`;

const StarIcon = styled.i`
  color: rgb(229,176,93);
`

const CommentInputArea = styled.textarea`
  height: 100px;
  width: 650px;
  border: 1px solid lightgrey;
  resize: none;
  font-size: 15px;
  
  
  &:active,
  &:focus {
    outline: none;
  };
`;

const CommentSubmitButton = styled.div`
  height: 40px;
  width: 90px; //118
  background-color: lightgrey;
  margin-left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #2e2e2e;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
  border-radius: 6px;
  cursor: pointer;
`;

const MovieCommentArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentBox = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
`;

const CommentUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
`;

const CommentContent = styled.div`
  font-weight: 300;
  width: 770px;
`

const CommentStar = styled.div`

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

  const [starRate, setStarRate] = useState(5);

  const onsStarSelectChange = (event) => {
    console.log('change value', event.target.value);
    setStarRate(event.target.value);
  };

  return (
    <div>
      {
        isOpen ?
          <ModalWrapper>
            <ModalOverlay/>

            <ModalContainer>
              <CloseButton onClick={close}/>

              <MovieInfoContainer>
                <MovieImage src={`http://image2.megabox.co.kr/mop/poster/2019/37/FC0155-CBED-48D6-B4F8-0F686D79CE86.large.jpg`}/>
                <MovieDetailContainer>
                  <MovieDetailContainerHeader>
                    <MovieTitle>겨울왕국2</MovieTitle>
                    <PreferenceButtonsContainer>
                      <HappyButton>
                        <HappyIcon/>
                        재미있게 봤어요!
                      </HappyButton>
                      <SadButton>
                        <SadIcon/>
                        제취향은 아니에요
                      </SadButton>
                    </PreferenceButtonsContainer>
                  </MovieDetailContainerHeader>

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

              <CommentContainer>
                <UserCommentInputArea>
                  <UserInfoArea>
                    <UserId>KKonzi</UserId>
                    <StarContainer onChange={(e) => {onsStarSelectChange(e)}} defaultValue={5}>
                      <option value={1}>★</option>
                      <option value={2}>★★</option>
                      <option value={3}>★★★</option>
                      <option value={4}>★★★★</option>
                      <option value={5}>★★★★★</option>
                    </StarContainer>
                  </UserInfoArea>
                  <CommentInputArea/>
                  <CommentSubmitButton>등록</CommentSubmitButton>
                </UserCommentInputArea>

                <MovieCommentArea>

                  <CommentBox>
                    <CommentUserInfo>
                      <UserId>KKonzi</UserId>
                      <CommentStar>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                      </CommentStar>
                    </CommentUserInfo>
                    <CommentContent>{summary}</CommentContent>
                  </CommentBox>

                  <CommentBox>
                    <CommentUserInfo>
                      <UserId>KKonzi</UserId>
                      <CommentStar>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                        <StarIcon className="fas fa-star"/>
                      </CommentStar>
                    </CommentUserInfo>
                    <CommentContent>{summary}{summary}</CommentContent>
                  </CommentBox>
                </MovieCommentArea>
              </CommentContainer>


            </ModalContainer>
          </ModalWrapper>
        : null
      }
    </div>
  );
};

export default MovieModal;

