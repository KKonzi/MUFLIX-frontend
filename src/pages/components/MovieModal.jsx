import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {closeButton, happyIcon, sadIcon} from '../../images';
import axios from "axios";
import {addComment} from "@babel/types";

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
  top: 30px;
  right: 30px;
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
  display: flex;
  align-items: center;
`

const CommentStar = styled.div`

`;

const MovieModal = ({isOpen,close,movieId}) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [movieComments, setMovieComments] = useState([]);
  const [starRate, setStarRate] = useState(5);
  const [commentContent, setCommentContent] = useState(5);

  useEffect(() => {
    setStarRate(5);
    console.log('movie modal',movieId);
    setMovieData(movieId);
  }, [movieId]);

  const setMovieData = async (movieId) => {
    if(movieId!==0) {
      const {data} = await axios.post(`http://1.201.141.81:5902/movieInfo`,{'movieId': movieId});
      setMovieInfo(data);
      setMovieComments(data['comments'].reverse());

      console.log(data);
      console.log(data['comments']);
    }
  };


  const updateNetflixMovie = () => {
    if(window.confirm('적용하시겠습니까?')) {
      window.alert('적용되었습니다!');
    }
  };

  const addCommentToDB = async () => {
    console.log('아이디',localStorage.MuflixLoginId,'별점',starRate,'댓글내용',commentContent);

    const {data} = await axios.post(`http://1.201.141.81:5902/comments`,{
      'movie_id': movieId,
      'user_id': localStorage.MuflixLoginId,
      'star_num' : starRate, //0~5 정수
      'content' : commentContent
    });

    setMovieComments(data.reverse());
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
                <MovieImage src={movieInfo['movie_thumbnail_url']}/>
                <MovieDetailContainer>
                  <MovieDetailContainerHeader>
                    <MovieTitle>{movieInfo['movie_title']}</MovieTitle>
                    <PreferenceButtonsContainer>
                      <HappyButton onClick={updateNetflixMovie}>
                        <HappyIcon/>
                        재미있게 봤어요!
                      </HappyButton>
                      <SadButton onClick={updateNetflixMovie}>
                        <SadIcon/>
                        제취향은 아니에요
                      </SadButton>
                    </PreferenceButtonsContainer>
                  </MovieDetailContainerHeader>

                  <OpenDate>
                    <DetailText>개봉일</DetailText>
                    {movieInfo['open_date']}
                  </OpenDate>
                  <Actors>
                    <DetailText>출연진</DetailText>
                    {movieInfo['actors']}
                  </Actors>
                  <RunningTime>
                    <DetailText>상영시간</DetailText>
                    {movieInfo['running_time']}분
                  </RunningTime>
                  <Summary>
                    <DetailText>줄거리</DetailText>
                    {movieInfo['summary']}
                  </Summary>
                </MovieDetailContainer>
              </MovieInfoContainer>

              <CommentContainer>
                <UserCommentInputArea>
                  <UserInfoArea>
                    <UserId>{localStorage.MuflixLoginId}</UserId>
                    <StarContainer onChange={(e) => {setStarRate(e.target.value)}} defaultValue={5}>
                      <option value={1}>★</option>
                      <option value={2}>★★</option>
                      <option value={3}>★★★</option>
                      <option value={4}>★★★★</option>
                      <option value={5}>★★★★★</option>₩
                    </StarContainer>
                  </UserInfoArea>

                  <CommentInputArea onChange={(e) => {setCommentContent(e.target.value)}}/>
                  <CommentSubmitButton onClick={addCommentToDB}>등록</CommentSubmitButton>
                </UserCommentInputArea>

                <MovieCommentArea>
                  {
                    movieComments.map(data =>
                      <CommentBox>
                        <CommentUserInfo>
                          <UserId>{data['user_id']}</UserId>
                          <CommentStar>
                            {
                              data['starArr'].map(item => <StarIcon className="fas fa-star"/>)
                            }
                          </CommentStar>
                        </CommentUserInfo>
                        <CommentContent>{data['comment']}</CommentContent>
                      </CommentBox>
                    )
                  }
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

