import React, { useState } from "react";
import styled from "styled-components";
import SubNavbar from "../components/public/SubNavbar";

const MyPage = () => {
  const [page, setPage] = useState(1);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);
  return (
    <Container>
      <SubNavbar
        title="마이페이지"
        pageState={{ page, setPage }}
        leftState={{leftArrow, setLeftArrow}}
        rightState={{rightArrow, setRightArrow}}
      />
      
    </Container>
  );
};

const Container = styled.div``;

export default MyPage;
