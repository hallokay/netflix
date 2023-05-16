import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
const Header = () => {
const navigate = useNavigate();

  return (
    <HeaderContainer className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button className="main-btn" onClick={() => navigate("/login")}>
        Login
      </button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10rem;
  z-index: 999;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    font-size: 1.05rem;
  }
`;
export default Header