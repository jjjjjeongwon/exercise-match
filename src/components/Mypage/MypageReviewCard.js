import React from "react";
import styled from "styled-components";
import ShowStarScore from "../public/ShowStarScore";

const MypageReviewCard = ({
  nickname,
  date,
  content,
  score,
  image,
  category,
}) => {
  return (
    <Container>
      <ProfileImage>
        <Image>
          <img
            src={
              image
                ? image
                : "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
            }
            alt=""
          />
        </Image>
      </ProfileImage>
      <ContextWrap>
        <PersonalWrap>
          <SmallWrap>
            <Nickname>{nickname}</Nickname>
            <Date>{date}</Date>
          </SmallWrap>
          <StarRate>
            <Star>
              <ShowStarScore score={score} width={80} height={16} />
            </Star>
          </StarRate>
        </PersonalWrap>
        <ButtonWrap>
          <Join>{category}</Join>
        </ButtonWrap>
        <Context>{content}</Context>
      </ContextWrap>
    </Container>
  );       
};

const Container = styled.div`
  width: 780px;
  height: 152px;
  border-top: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 20px 0px;
  display: flex;
`;

const ProfileImage = styled.div`
  width: 90px;
  height: 50px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContextWrap = styled.div`
  width: 692px;
`;

const PersonalWrap = styled.div`
  margin-bottom: 10px;
`;

const SmallWrap = styled.div`
  width: 660px;
  margin-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom:6px ;
`;

const Nickname = styled.div`
  font-size: 15px;
  height: 23px;
`;

const Date = styled.div`
  width: 52px;
  height: 15px;
  font-size: 10px;
  font-weight: bold;
  margin: auto 0px;
  box-sizing: border-box;
`;

const StarRate = styled.div`
  width: 680px;
  height: 16px;
`;

const Star = styled.div`
  width: 80px;
  height: 16px;
  margin-left: 10px;
  box-sizing: border-box;
  background-color: snow;
`;

const Context = styled.div`
  font-size: 10px;
  height: 30px;
  padding: 0px 10px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

const Join = styled.div`
  border: 1px solid #a8a8a8;
  border-radius: 2px ;
  padding: 4px;
  box-sizing: border-box;
  font-size: 10px;
  margin-left: 10px
`;

export default MypageReviewCard;
