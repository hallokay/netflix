import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addFavMovie, removeFavMovie } from "../store/features/userSlice";
import video from "../assets/video.mp4";
import {
  IoPlayCircleSharp,
  AiOutlinePlus,
  RiThumbUpFill,
  RiThumbDownFill,
  BiChevronDown,
  BsCheck,
} from "../util/constants";

const Card = ({ movieData, isLiked }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHoverd, setIsHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
      />
      {isHoverd && (
        <Hover className="hover">
          <ImgVideo>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
            />
            <video
              autoPlay
              loop
              playsInline
              muted
              onClick={() => navigate("/player")}
            >
              <source src={video} type="video/mp4" />
            </video>
          </ImgVideo>
          <Info className="flex column">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <Icons className="flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />

                {isLiked ? (
                  <BsCheck
                    title=" 리스트에서 제거"
                    onClick={() => dispatch(removeFavMovie(movieData))}
                  />
                ) : (
                  <AiOutlinePlus
                    title="리스트에 추가"
                    onClick={() => dispatch(addFavMovie(movieData))}
                  />
                )}
              </div>
              <div className="more-info">
                <BiChevronDown title="More Info" />
              </div>
            </Icons>
            <Genres className="flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </Genres>
          </Info>
        </Hover>
      )}
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  img {
    border-radius: .2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

`;

const Hover = styled.div`
  position: absolute;
  top: -10vh;
  left: 0;
  width: 20rem;
  height: max-content;
  z-index: 99;
  border-radius: .3rem;
  box-shadow: rgba(0,0,0,.75) 0px 3px 10px; 
  background: #181818;
  transition: .3s ease-in-out;
  
`;
const ImgVideo = styled.div`
  position: relative;
  height: 140px;
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 0.3rem;
    z-index: 4;
  }
  video {
    position: absolute;
    top: 0;
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 0.3rem;
    z-index: 5;
  }
`;
const Info = styled.div`
  padding: 1rem;
  gap: .5rem;
`;
const Icons = styled.div`
  .controls {
    display: flex;
    gap: 1rem;
  }
  svg {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #b8b8b8;
    }
  }
`;
const Genres = styled.div`

  ul {
    gap: 1rem;
    li {
      padding-right: 0.7rem;
      &:first-of-type {
        list-style-type: none;
      }
    }
  }
`;
export default Card;
