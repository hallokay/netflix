import React from 'react'
import styled from 'styled-components'

const UserInfo = ({handleAuth}) => {
  return (
    <User>
      <UserImg />
      <DropDown>
        <span onClick={handleAuth}>sign Out</span>
      </DropDown>
    </User>
  );
}

const UserImg = styled.img`
    
`
const DropDown = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  padding: 10px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0);
  border-radius: 4px;
  text-transform: capitalize;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  font-size: 14px;
  letter-spacing: 3px;
  white-space: nowrap;
  visibility: hidden;
`;

const User = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    &::before {
      position: absolute;
      bottom: -20px;
      right: 0;
      content: "";
      width: 100px;
      height: 30px;
    }
    ${DropDown} {
      visibility: visible;
      opacity: 1;
      transition: all 3s ease-in-out;
    }
  }

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
export default UserInfo