import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import video from '../assets/video.mp4'
const Player = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back" onClick={() => navigate(-1)}>
          <BsArrowLeft />
        </div>
        <video src={video} autoplay loop controls muted/>
      </div>
    </Container>
  )
}
const Container = styled.section`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position:absolute;
      padding: 2rem;
      z-index: 1;
      svg{
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`


export default Player