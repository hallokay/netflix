import React from 'react'
import BackGround from '../assets/login.jpg'
import styled from 'styled-components';

const Bgimg = () => {
  return (
    <Container>
      <img src={BackGround} alt="background" />
    </Container>
  );
}
const Container = styled.div`
position: absolute;
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default Bgimg