import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Layout = () => {
  // 스크롤에 따라
  const [isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  return (
    <>
      <Header isScrolled={isScrolled} />

      <Outlet />
    </>
  );
};

export default Layout;
