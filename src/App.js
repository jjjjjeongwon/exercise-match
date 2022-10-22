//packages
import { useEffect } from 'react';
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useChannelIOApi, useChannelIOEvent } from "react-channel-plugin";

// components

// redux
import { locationAction } from "./redux/actions/locationAction";
import { userSliceAction } from "./redux/reducers/userReducer";

//pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import KakaoLogin from "./pages/KakaoLogin";
import Signup from "./pages/Signup";
import NaverLogin from "./pages/NaverLogin";
import Board from "./pages/Board";
import Mypage from "./pages/Mypage";
import Review from "./pages/Review";
import UserInfo from "./pages/UserInfo";
import ModalComponents from "./components/public/ModalComponents";
import MatchingPostWrite from "./pages/MatchingPostWrite";
import CommunityPostWrite from "./pages/CommunityPostWrite";
import MatchingDetailpage from "./pages/MatchingDetailpage";
import InformationDetailPage from "./pages/InformationDetailPage";
import MemberExit from "./pages/MemberExit";
import PasswordChange from "./pages/PasswordChange";
import PasswordFind from "./pages/PasswordFind";
import userAPI from "./apis/userAPI";
import SearchPage from "./pages/SearchPage";
import GoogleLogin from "./pages/GoogleLogin";

export let sessionStorageLogin = sessionStorage;
export const is_authorization = sessionStorage.getItem("accesstoken")
  ? true
  : false;

function App() {
  const dispatch = useDispatch();
  // const {isLogin} =useSelector((state)=>state.userReducer);

  const { showMessenger } = useChannelIOApi();
  useChannelIOEvent("onShowMessenger", () => {
    console.log("Messenger opened!");
  });

  useEffect(() => {
    dispatch(locationAction.loadLocalList());
  }, []);

  useEffect(() => {
    console.log(is_authorization);
    if (is_authorization) {
      userAPI.defaults.headers.common["accesstoken"] =
        sessionStorage.getItem("accesstoken");
      dispatch(
        userSliceAction.setLogin({
          username: sessionStorage.getItem("username"),
          nickname: sessionStorage.getItem("nickname"),
          profile: sessionStorage.getItem("profile"),
          social: sessionStorage.getItem("social"),
        })
      );
      // navigate("/");
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/board" element={<Board />} />
        <Route path="/matchingpostWrite" element={<MatchingPostWrite />} />
        <Route path="/communitypostWrite" element={<CommunityPostWrite />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/review/:id" element={<Review />} />
        <Route path="/detail/matching/:id" element={<MatchingDetailpage />} />
        <Route path="/detail/:type/:id" element={<InformationDetailPage />} />
        <Route path="/passwordFind" element={<PasswordFind />} />
        <Route path="/passwordChange" element={<PasswordChange />} />
        <Route path="/memberExit" element={<MemberExit />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user/kakao/callback" element={<KakaoLogin />} />
        <Route path="/api/naverLogin" element={<NaverLogin />} />
        <Route path="/oauth2/redirect" element={<GoogleLogin />} />
      </Routes>
      <ModalComponents />
      <span onClick={showMessenger}></span>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
  height: 100%;
  min-height: 100vh;
`;

export default App;
