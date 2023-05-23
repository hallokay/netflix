import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { navLinks } from "../util/constants";
const NavMenu = () => {
  return (
    <NavMenuList>
      {navLinks.map((menu, i) => (
        <Link key={i} to={menu.link}>
          <span>{menu.name}</span>
        </Link>
      ))}
    </NavMenuList>
  );
};

const NavMenuList = styled.div`
  display: flex;
  justify-content: flex-start;
  /* 요소들을 로고옆에 붙혀줌 */
  position: relative;
  margin-right: auto;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-transform: capitalize;
  }
`;

export default NavMenu;
