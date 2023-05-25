import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: [],
    genresLoded: false,
    genres: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    extraReducers: () => {},
})

export default movieSlice.reducer;