import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {TMDB_BASE_URL, API_KEY} from '../../util/constants'


const initialState = {
    movies: [],
    genresLoded: false,
    genres: []
}



//영화의 장르의 목록을 가져온다.
export const getGenres = createAsyncThunk('movie/genres', async() => {
  const { data: {genres} } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return genres
})

// 인기 있는 영화 데이터를 가져옴 fetch
//type으로 영화의 유형을 정할 수 잇고
//thunkAPI 매개변수를 통해 현재 Redux 상태를 액세스할 수 있습니다. thunkAPI.getState()를 통해 현재 상태에서 netflix.genres를 가져옴
export const fetchMovies = createAsyncThunk('movie/trending', async({type}, thunkApi) => {
    const {
        movie: {genres},
    } = thunkApi.getState();
    return getRawData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
})

const getRawData = async (api, genres, paging = false) =>{
    const moviesArr = [];
    for(let i = 1; moviesArr.length < 60 && i < 10; i++) {
        const {
            data: {results}
        } = await axios.get(`${api}${paging ? `&page=${i}` : ''}`);
        createArrFromRawData(results, moviesArr, genres);
    }

}

const createArrFromRawData = (resultsArr, moviesArr, genres) => {
resultsArr.forEach((movie) => {
    const movieGenres = [];
    
})
}
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
          state.genres = action.payload;
          state.genresLoded = true;
        }),
          builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
          
          });
    },
})

export default movieSlice.reducer;