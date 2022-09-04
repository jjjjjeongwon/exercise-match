import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useState, useRef } from "react";
import ReviewBoxAfter from "./ReviewBoxAfter";
import { useDispatch } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";

const ReviewBox = () => {
  const dispatch = useDispatch();
  const [rate, setRate] = useState(5);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);

  const checkboxRefForm = useRef();
  
  useEffect(()=>{
    loadReview("1");
  }, [])

  const loadReview = async(id) =>{
    try{
      const res = await dispatch(boardAction.loadReview({id})).unwrap();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const save = async (e) => {
    e.preventDefault();

    const reviewData = {
      score : rate,
      checkList: {
        1: checkboxRefForm.current[0].checked,
        2: checkboxRefForm.current[1].checked,
        3: checkboxRefForm.current[2].checked,
        4: checkboxRefForm.current[3].checked,
        5: checkboxRefForm.current[4].checked,
      },
      review: checkboxRefForm.current[5].value,
    };

    console.log(reviewData);
    console.log(checkboxRefForm);

    try{
      const res = await dispatch(boardAction.postReview(reviewData));
    } catch(e){
      console.log(e);
    }

  };

  return (
    <Container>
      <ReviewTitle>
        홍길동님 ,<br />
        ___님과 매칭은 어떠셨나요?
      </ReviewTitle>
      <StarForm show={show} ref={checkboxRefForm} onSubmit={(e) => save(e)}>
        <StarBox show={show}>
          {Array.from({ length: 5 }, (_, idx) => {
            return  (!show && hovered < idx + 1 ) || (show && rate < idx + 1)? (
              <Star
                key={idx}
                onClick={() => {
                  if (!show) setRate(idx + 1);
                  setShow(!show);
                }}
                onMouseEnter={() => {if (!show) setHovered(idx + 1)}}
                onMouseLeave={() => {if (!show) setHovered(null)}}
              >
                <BsStar size={42} />
              </Star>
            ) : (
              <Star
                key={idx}
                onClick={() => {
                  if (!show) setRate(idx + 1);
                  setShow(!show);
                }}
                onMouseEnter={() => {if (!show) setHovered(idx + 1)}}
                onMouseLeave={() => {if (!show) setHovered(null)}}
              >
                <BsStarFill size={42} color="#00CFFF" />
              </Star>
            );
          })}
        </StarBox>
        {show && <ReviewBoxAfter rate={rate} />}
      </StarForm>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  min-height: 600px;
  padding: 80px 100px;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 31px auto;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const ReviewTitle = styled.div`
  width: 315px;
  height: 92px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 25px;
  color: #000000;
  margin: auto;
`;

const StarForm = styled.form`
  transition: all 0.2s ease;
  ${({ show }) => {
    return css`
      transform: ${show ? "translateY(-40px)" : "translateY(+40px)"};
    `;
  }}
`;

const StarBox = styled.div`
  width: 320px;
  height: 60px;
  margin: 50px auto 50px;
  display: flex;
  justify-content: center;
  transition: transform 0.2s ease;
  ${({ show }) => {
    return css`
      transform: ${show ? "scale(60%)" : "scale(100%)"};
    `;
  }}
`;

const Star = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
`;

export default ReviewBox;
