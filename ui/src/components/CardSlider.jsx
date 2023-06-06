import React, { useRef, useState } from "react";
import { Card } from "./index";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
const CardSlider = ({ data, title }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();
  const favoriteMovies = useSelector((state) => state.user.favoriteMovies);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x -70;
    if(direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setSliderPosition(sliderPosition -1);
    }
    if(direction === "right" && sliderPosition < 4) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <Container
      className="flex column"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <Wrapper>
        <SliderAction
          className={` 
      left flex j-center a-center
      ${!showControls ? "none" : ""}`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </SliderAction>
        <Slider className="flex" ref={listRef}>
          {data.map((movie, i) => (
            <Card
              movieData={movie}
              i={i}
              key={movie.id}
              isLiked={favoriteMovies.some((m) => m.id === movie.id)}
            />
          ))}
        </Slider>
        <SliderAction
          className={` 
      right flex j-center a-center
      ${!showControls ? "none" : ""}`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </SliderAction>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  padding: 2rem 0;
  gap: 1rem;

  h1 {
    margin-left: 50px;
  }
`;
const Wrapper = styled.div`
  .none {
    display: none;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
`;
const Slider = styled.div`
  width: max-content;
  gap: 1rem;
  transform: translateX(0px);
  transition: 0.3s ease-in-out;
  margin-left: 50px;
`;
const SliderAction = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 100%;
  transition: 0.3s ease-in-out;
  z-index: 99;
  svg {
    font-size: 2rem;
  }
`;

export default CardSlider;
