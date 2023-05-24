import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
// 파이어베이스
import { firebaseAuth } from "../util/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
// 리덕스
import { useDispatch } from "react-redux";
import {
  setUserLongin,
  setSignOut,
} from "../store/features/userSlice";
// 컴포넌트
import { NavMenu, UserInfo, SearchBar } from "./index";

const Header = ({ isScrolled }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedin] = useState( );

  const handleAuth = () => {
    // console.log("handleAuth");

    dispatch(setSignOut());
    setIsLoggedin(false);
    firebaseAuth.signOut();
  };

  const setUser = (currentUser) => {
    // console.log("header", currentUser);
    const {
      email,
      reloadUserInfo: { passwordHash: password },
    } = currentUser;
    dispatch(setUserLongin(email, password));
  };

  useEffect(() => {

    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
           setIsLoggedin(true);
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <HeaderContainer className="flex a-center j-between ">
        <Logo href="/">
          <img src={logo} alt="logo" />
        </Logo>

        {isLoggedIn ? (
          // 로그인 사용자가 있으면 메뉴와 유저 인포를
          <>
            <NavMenu />
            <SearchBar/>

            <UserInfo handleAuth={handleAuth} />
          </>
        ) : (
          // 없으면 로그인 버튼을 띄워주기
          <LoginBtn className="main-btn" onClick={() => navigate("/login")}>
            Login
          </LoginBtn>
        )}
      </HeaderContainer>
    </>
  );
};

// 스타일 CSS

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10rem;
  z-index: 999;


  /* 모바일 테블릿 상태일때 */
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.a`
  img {
    height: 5rem;
  }
  h1 {
    color: #fff;
  }
  /* 모바일 테블릿 상태일때 */
  @media (max-width: 768px) {
    /* display: none; */
    img {
      height: 3rem;
    }
  }
`;
const LoginBtn = styled.a`
  font-size: 1.05rem;
`;


export default Header;
