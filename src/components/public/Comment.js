import React, { useEffect } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";

const Comment = ({ boardId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardAction.loadComments(boardId));
  }, []);

  const Alert = (e, commentId = "1") => {
    e.preventDefault();
    Swal.fire({
      // title: '',
      text: "댓글을 삭제하시겠습니까?",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#494949",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      width: 439,
      hideClass: {
        popup: "",
      },
      // heightAuto:false,
      // height:'359px'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let timerInterval;
        try {
          Swal.fire({
            title: "삭제중",
            width: 439,
            timerProgressBar: true,
            showClass: {
              popup: "",
            },
            hideClass: {
              popup: "",
            },
            didOpen: () => {
              Swal.showLoading();
            },
          });
          const resDel = await dispatch(
            boardAction.delComment({ boardId, commentId })
          ).unwrap();
          console.log(resDel);
          Swal.fire({
            icon: "success",
            title: "삭제완료!",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (e) {
          console.log(e);
          Swal.fire({
            icon: "warning",
            title: "삭제실패!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <Container>
      <CommentInput placeholder="댓글을 남겨주세요" />
      <CommentWrap>
        <ProfileWrap>
          <Profile>
            <img
              src="http://file3.instiz.net/data/cached_img/upload/2018/09/15/0/28998558fac5abcead6e6e942d53194f.jpg"
              alt=""
            />
          </Profile>
          <Nickname>홍길동</Nickname>
          <Delete>
            <FiX size={20} onClick={Alert} />
          </Delete>
        </ProfileWrap>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Content>
        <Date>
          <div>22.xx.xx</div>
        </Date>
      </CommentWrap>

      <CommentWrap>
        <ProfileWrap>
          <Profile>
            <img
              src="http://file3.instiz.net/data/cached_img/upload/2018/09/15/0/28998558fac5abcead6e6e942d53194f.jpg"
              alt=""
            />
          </Profile>
          <Nickname>홍길동</Nickname>
        </ProfileWrap>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elit
          donec nunc posuere pulvinar libero fermentum mi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Viverra elit donec nunc posuere
          pulvinar libero fermentum mi.
        </Content>
        <Date>
          <div>22.xx.xx</div>
        </Date>
      </CommentWrap>

      <CommentWrap>
        <ProfileWrap>
          <Profile>
            <img
              src="http://file3.instiz.net/data/cached_img/upload/2018/09/15/0/28998558fac5abcead6e6e942d53194f.jpg"
              alt=""
            />
          </Profile>
          <Nickname>홍길동</Nickname>
        </ProfileWrap>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elit
          donec nunc posuere pulvinar libero fermentum mi.
        </Content>
        <Date>
          <div>22.xx.xx</div>
        </Date>
      </CommentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 700px;
  box-sizing: border-box;
`;

const CommentInput = styled.input`
  padding-left: 20px;
  width: 700px;
  height: 69px;
  border: 1px solid #a8a8a8;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const CommentWrap = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #dedede;
`;

const ProfileWrap = styled.div`
  height: 50px;
  display: flex;
`;

const Profile = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 30px;
  border-radius: 70px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Nickname = styled.div`
  width: 75px;
  height: 29px;
  margin: auto auto auto 0px;
`;

const Delete = styled.div`
  width: 26px;
  height: 26px;
  margin: auto 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 10px 10px 10px 80px;
  font-size: 20px;
`;

const Date = styled.div`
  height: 29px;
  color: #494949;
  font-size: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  div {
    margin-right: 10px;
  }
`;

export default Comment;
