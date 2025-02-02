import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import KakaoMapForPost from "../components/Board/MatchingBoard/KakaoMapForPost";
import NavBar from "../components/public/NavBar";
import { boardAction } from "../redux/actions/boardAction";
import Swal from "sweetalert2";

const CommunityPostWrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category_ref = useRef(null);
  const photoInput_ref = useRef(null);
  const titleInput_ref = useRef();
  const contentInput_ref = useRef();

  const [files, setFiles] = useState("");

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  const handleClick = () => {
    photoInput_ref.current.click();
  };

  useEffect(() => {
    preview();
  }, [files]);

  const preview = () => {
    if (!files[0]) return false;

    const reader = new FileReader();

    reader.onload = function (event) {
      if (event.target.result) {
        const previewImage = document.getElementById("preview-image");
        previewImage.src = event.target.result;
      }
    };

    // reader.onload = () =>
    //   (imgEL.style.backgroundImage = `url(${reader.result})`);

    reader.readAsDataURL(files[0]);

    console.log(reader, "reader!!");
  };

  console.log(files[0]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const object = new FormData();
    object.append("boardType", "information");
    object.append("data", files[0]);
    object.append("title", titleInput_ref.current.value);
    object.append("category", category_ref.current.value);
    object.append("content", contentInput_ref.current.value);
    object.append("maxEntry", "0");
    object.append("endDateAt", null);
    object.append("city", null);
    object.append("gu", null);
    object.append("lat", "0");
    object.append("lng", "0");

    for (var key of object.entries()) {
      console.log(`${key}`);
    }

    try {
      const res = await dispatch(boardAction.postBoard(object)).unwrap();
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "작성완료!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/detail/information/${res.data}`);
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "warning",
        title: "작성실패!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <NavBar />
      <Form onSubmit={onHandleSubmit}>
        <Container>
          <Text>카테고리</Text>
          <CategoryDrop
            defaultValue="default"
            id="category"
            name="category"
            ref={category_ref}
          >
            <option value="default" disabled>
              카테고리 선택
            </option>
            <option value="gym">헬스 </option>
            <option value="running">러닝&조깅 </option>
            <option value="riding">라이딩 </option>
            <option value="badminton">배드민턴 </option>
            <option value="tennis">테니스 </option>
            <option value="golf">골프 </option>
            <option value="hiking">등산 </option>
          </CategoryDrop>
          <Text>제목</Text>
          <TitleInput
            placeholder="제목을 입력해주세요"
            name="title"
            ref={titleInput_ref}
          />

          <ImageButton
            onClick={handleClick}
            photoInput_ref={photoInput_ref.current?.value}
          >
            <input
              type="file"
              id="image"
              accept="img/*"
              onChange={onLoadFile}
              style={{ display: "none" }}
              ref={photoInput_ref}
            />
            이미지 등록({photoInput_ref.current?.value ? "1" : "0"}/1)
          </ImageButton>
          {photoInput_ref.current?.value && (
            <LocationImage>
              <img id="preview-image" src="" alt="" />
            </LocationImage>
          )}
          <Text>내용</Text>
          <ContentInput
            placeholder="내용을 입력해주세요"
            name="context"
            ref={contentInput_ref}
          />
          <WriteButton type="submit">작성하기</WriteButton>
        </Container>
      </Form>
    </>
  );
};

const Form = styled.form`
  margin-bottom: 112px;
`;

const Container = styled.div`
  width: 700px;
  /* height: 1349px; */
  margin: 15px auto;
`;

const Text = styled.div`
  height: 29px;
  font-weight: bold;
  color: #494949;
  font-size: 20px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

const CategoryDrop = styled.select`
  width: 180px;
  height: 50px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const TitleInput = styled.input`
  width: 700px;
  height: 50px;
  border: 1px solid #a8a8a8;
  box-sizing: border-box;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 40px;
`;

const ContentInput = styled.textarea`
  width: 700px;
  height: 373px;
  box-sizing: border-box;
  border: 1px solid #a8a8a8;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 40px;
  resize: none;
`;

const GatherWrap = styled.div`
  width: 700px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 40px;
`;

const GatherText = styled.div`
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #494949;
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

const LocationImage = styled.div`
  width: 700px;
  margin-bottom: 70px; // 매칭, 정보공유에 따라 수정 필요
  box-sizing: border-box;
  /* background-size: contain;
  background-repeat: no-repeat; */
  background-size: cover;
  img {
    width: 100%;
  }
`;

const ImageButton = styled.div`
  width: 700px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #dedede;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ photoInput_ref }) => {
    return css`
      background-color: ${photoInput_ref ? "#a8a8a8" : "#A2E9FA"};
    `;
  }}
`;

const WriteButton = styled.button`
  width: 700px;
  height: 89px;
  box-sizing: border-box;
  border: 1px solid #a8a8a8;
  background-color: #00cfff;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 70px;
`;

export default CommunityPostWrite;
