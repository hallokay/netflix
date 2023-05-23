import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../util/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import {NavMenu} from './index'
const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setIsLoggedIn(false);
    });
  }, []);
  return (
    <>
      <HeaderContainer className="flex a-center j-between">
        <Logo href="/">
          <img src={logo} alt="logo" />
        </Logo>

        <NavMenu />
        {isLoggedIn && (
          <LoginBtn className="main-btn" onClick={() => navigate("/login")}>
            Login
          </LoginBtn>
        )}
      </HeaderContainer>
    </>
  );
};

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
  /* 모바일 테블릿 상태일때 */
  @media (max-width: 768px) {
    display: none;
  }
`;
const LoginBtn = styled.a`
  font-size: 1.05rem;
`;
export default Header;
