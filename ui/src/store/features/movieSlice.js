import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import generateApiUrl from "../../util/generateApiUrl";

const initialState = {
  movies: [],
  genres: [],
};

export const getGenres = createAsyncThunk("movie/genres", async () => {
  const url = generateApiUrl("/genre/movie/list");

  const {
    data: { genres },
  } = await axios.get(url);
  // console.log("저장소 genres", genres);
  return genres;
});
export const fetchDataByGenre = createAsyncThunk(
  "movie/genre",
  async ({ genre, type }, thunkApi) => {
    const {
      movie: { genres },
    } = thunkApi.getState();
    const apiUrl = generateApiUrl(`/discover/${type}`, `with_genres=${genre}`);
    const movies = await getRawData(apiUrl, genres);
    // console.log("fetchDataByGenre movies", movies);
    return movies;
  }
);

export const fetchMovies = createAsyncThunk(
  "movie/trending",
  async ({ type }, thunkApi) => {
    const {
      movie: { genres },
    } = thunkApi.getState();
    const apiUrl = generateApiUrl(`trending/${type}/week`);
    const movies = await getRawData(apiUrl, genres);
    // console.log("저장소 movies", movies);
    return movies;
  }
);

const getRawData = async (api, genres) => {
  const moviesArr = [];
  for (let page = 1; moviesArr.length < 60 && page < 10; page++) {
    const {
      data: { results },
    } = await axios.get(api, { params: { page } });
    createArrFromRawData(results, moviesArr, genres);
  }
  return moviesArr;
};

const createArrFromRawData = (resultsArr, moviesArr, genres) => {
  resultsArr.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });

    if (movie.backdrop_path) {
      moviesArr.push({
        id: movie.id,
        name: movie?.original_name
          ? movie?.original_name
          : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
    }
  });
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.genres = action.payload;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      // console.log('fetchMovies', action.payload);
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default movieSlice.reducer;
