import React from "react";
import styled,{css} from "styled-components";
import CheckListBox from "./CheckListBox";

const ReviewBoxAfter =({rate}) => {
  return (
    <Container>
      {rate > 3 ? (
        <>
          <ReviewOpinion>어떤 점이 좋았나요?</ReviewOpinion>
          <CheckListBox rate={rate}/>
        </>
      ) : (
        <>
          <ReviewOpinion>어떤 점이 아쉬웠나요?</ReviewOpinion>
          <CheckListBox rate={rate} />
        </>
      )}

      <WriteWrap>
        <WriteTitleWrap>
          <WriteTitle>건강한 매칭 리뷰를 남겨주세요!</WriteTitle>
          <WriteSubTitle>
            남겨주신 매칭 후기는 상대방의 프로필에 공개됩니다.
          </WriteSubTitle>
        </WriteTitleWrap>
        <WriteBox placeholder="(선택사항입니다)" />
      </WriteWrap>

      <SubmitBtn>작성하기</SubmitBtn>
    </Container>
  );
};

const Container = styled.div`
`;

const ReviewOpinion = styled.div`
  width: 400px;
  height: 49px;
  margin: auto;
  font-size: 20px;
  padding-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;

const WriteWrap = styled.div`
  width: 400px;
  height: 207px;
  margin: auto;
`;

const WriteTitleWrap = styled.div`
  height: 57px;
  margin-bottom: 20px;
`;

const WriteTitle = styled.div`
  font-size: 20px;
  height: 29px;
  margin-bottom: 5px;
`;

const WriteSubTitle = styled.div`
  font-size: 15px;
  color: #494949;
  height: 23px;
`;

const WriteBox = styled.textarea`
  margin: auto;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  height: 130px;
  width: 400px;
  padding: 10px 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
  resize: none;
  &::placeholder {
    color: #a8a8a8;
  }
`;

const SubmitBtn =styled.button`
  width:400px;
  height:69px;
  border:none;
  background-color: #494949;
  padding: 20px 0px;
  box-sizing: border-box;
  color:white;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
`;

export default ReviewBoxAfter;
