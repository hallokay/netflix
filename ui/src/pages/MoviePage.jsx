import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store/features/movieSlice";
import { Slider, NotAvailable, SelectGenres } from "../components";

const MoviePage = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movie.genres);
  const movies = useSelector((state) => state.movie.movies);

  // 장르를 불러오기
  useEffect(() => {
    dispatch(getGenres());
    
  }, []);
  // 영화 가져오기
  useEffect(() => {
    if (genres.length > 0) dispatch(fetchMovies({ type: "movie" }));
  }, [genres]);

  return (
    <Container>
      <SelectGenres type="movie" />
      <Data>

        {movies.length ? <Slider /> : <NotAvailable />}
     
      </Data>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 7rem;
`;
const Data = styled.div``;
export default MoviePage;
