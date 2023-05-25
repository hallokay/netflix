import React, { useState } from "react";
import styled from "styled-components";
import bg from "../assets/home.jpg";
import movieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Netflix = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Hero>
        <img className="bg-img" src={bg} alt="영화 이미지" />
        <MovieInfo>
          <div className="movie-title">
            <img src={movieLogo} alt="movie-logo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/play")}
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </MovieInfo>
      </Hero>
    </Container>
  );
};

const Container = styled.section`
  background: #000;
`;
const Hero = styled.div`
  position: relative;
  .bg-img {
    filter: brightness(60%);
    width: 100vw;
    height: 100vh;
  }
`;
const MovieInfo = styled.div`
  position: absolute;
  bottom: 5rem;
  
  .movie-title {
    img {
      width: 100%;
      height: 100%;
      margin-left: 5rem;
    }
  }

  .buttons {
    margin: 5rem;
    gap: 1rem;
    button {
      font-size: 1.4rem;
      gap: 0.5rem;
      border-radius: 0.2rem;
      padding: 0.5rem 2rem;
      border: none;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
      &:nth-of-type(2) {
        background-color: rgb(109, 109, 110);
        color: white;
        svg {
          font-size: 1.8rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    bottom: 10rem;
    .movie-title {
      img {
        width: 70%;
      }
    }
    .buttons {
      margin: 2rem 5rem;
      gap: 1rem;
      button {
        font-size: 1rem;
        gap: 0.5rem;
        border-radius: 0.2rem;
        padding: 0.5rem 1.8rem;
      }
    }
  }
`;
export default Netflix;
