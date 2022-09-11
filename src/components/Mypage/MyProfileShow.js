import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputEditButton from "../public/InputEditButton";
import InputEditToggle from "../public/InputEditToggle";
import InputJoinList from "../public/InputJoinList";
import ShowStarScore from "../public/ShowStarScore";
import { FaPen } from "react-icons/fa";

const MyProfileShow = ({ mypage = true, profileImg }) => {
  const navigate = useNavigate();

  const { userNickName, userJoinList, userInterest, userProfile } = useSelector(
    (state) => state.userReducer
  );

  return (
    <Container>
      <LeftFrame>
        <LeftZone>
          <PhotoContainer>
            <PhotoFrame>
              <img
                src={userProfile ? userProfile : "/images/anonymousProfile.png"}
                alt=""
              />
            </PhotoFrame>
            <ModifyButton>
              <FaPen size={15} />
            </ModifyButton>
          </PhotoContainer>
          <InfoFrame>
            <NameZone>{userNickName}</NameZone>
            <ShowStarScore score={4} width={133.25} height={25} />
          </InfoFrame>
        </LeftZone>
      </LeftFrame>
      <RightFrame>
        <RightZone>
          <InputEditButton
            initialState={userNickName}
            editBt={mypage ? true : false}
          />
          <InputEditToggle
            title="관심사"
            initialState={userInterest}
            fontSize="15px"
            editBt={mypage ? true : false}
            border={true}
          />
          <InputJoinList
            title="참여횟수"
            initialState={`헬스 ${userJoinList["gym"]}회 | 런닝&조깅 ${userJoinList["running"]}회 | 배드민턴 ${userJoinList["badminton"]}회 | 테니스 ${userJoinList["tennis"]}회 | 라이딩 ${userJoinList["riding"]}회 | 골프 ${userJoinList["golf"]}회 | 기타 ${userJoinList["etc"]}회`}
            editBt={false}
            fontSize="15px"
          />
          {mypage ? (
            <ButtonZone onClick={(e) => navigate("/userinfo")}>
              <button>회원정보 보기</button>
            </ButtonZone>
          ) : (
            <></>
          )}
        </RightZone>
      </RightFrame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #dedede;
  overflow: hidden;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 10px solid #ffffff;
  width: 310px;
  height: 280px;
  gap: 10px;
`;

const LeftZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PhotoContainer = styled.div`
  position: relative;
`;

const PhotoFrame = styled.div`
  width: 127px;
  height: 127px;
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

const ModifyButton = styled.div`
  position: absolute;
  background-color: #a8a8a8;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  bottom: 2px;
  right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const InfoFrame = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const NameZone = styled.div`
  font-size: 22px;
  font-weight: 400;
`;

const RightFrame = styled.div`
  width: 470px;
  background-color: white;
`;

const RightZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 28px 35px;
`;

const ButtonZone = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    margin-right: 10px;
    width: 103px;
    height: 31px;
    background: #494949;
    border: 1px solid #494949;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;

export default MyProfileShow;
