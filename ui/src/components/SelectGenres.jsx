import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataByGenre} from '../store/features/movieSlice'
const SelectGenres = ({ type }) => {
  const genres = useSelector((state) => state.movie.genres);
  const dispatch = useDispatch();
  return (
    <Select onChange={(e) => dispatch(fetchDataByGenre({genre: e.target.value, type}))} >
        <option value="">-</option>
      {genres.map((genre) => (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      ))}
    </Select>
  );
};
const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;
export default SelectGenres;
