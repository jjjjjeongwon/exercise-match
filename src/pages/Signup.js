// packages
import React, {useState} from "react";
import styled from "styled-components";

// components
import SignupAuth from "../components/SignupAuth";
import SignupNavbar from "../components/SignupNavbar";

const Signup = () => {
  const [page,setPage] = useState(1);
  return (
    <Container>
      <SignupNavbar pageState={{page,setPage}} title={"회원가입("+page+"/2)"} leftArrow={true} rightArrow={false} />

      <SignupOutline>
        <SignupBox>
          {<SignupAuth />}
          <Wrap>
          <Title>이름</Title>
          <Box placeholder="이름을 입력해주세요."></Box>
          </Wrap> 
          <Wrap>
          <Title>닉네임</Title>
          <Box placeholder="닉네임을 입력해주세요."></Box>
          </Wrap> 
          <Wrap>
          <Title>연락처</Title>
          <Box placeholder="연락처를 입력해주세요.."></Box>
          </Wrap>
          <NextButton>다음</NextButton>
        </SignupBox>
      </SignupOutline>
    </Container>
  );
};

const Container = styled.div``;

const SignupOutline = styled.div`
  height: 800px;
  width: 800px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px auto 0;
`;

const SignupBox = styled.div`
  width: 100%;

  margin: 75px 50px;
`;

const NextButton = styled.div`
  width: 100%;
  height: 69px;
  position: relative;
  bottom: 0;
  background-color: #dedede;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 196px;
`;

const Wrap = styled.div`
  height: 84px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  height:29px;
  margin-bottom: 5px;
  box-sizing: border-box;
  color: #494949;
  font-size: 20px;
  font-weight: bold;
`;

const Box = styled.input`
margin: 0%;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 20px;
  &::placeholder {
    color: #DEDEDE;
  }
`;

export default Signup;
