import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: null,
  password: null,
  favoriteMovies: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLongin: {
      reducer(state, action) {
        // console.log("저장소 유저정보 로그인", action.payload);
        state = action.payload;
      },
      prepare(email, password) {
        return {
          payload: {
            email,
            password,
          },
        };
      },
    },
    setSignOut: (state) => {
      // console.log("저장소 sign out");
      state.email = null;
      state.password = null;
    },
    addFavMovie: (state, action) => {
      // console.log("favMovie", action.payload);
      state.favoriteMovies.push(action.payload);
    },
    removeFavMovie: (state, action) => {
      // console.log("movieid", action.payload);
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },

});

export const { setUserLongin, setSignOut, addFavMovie, removeFavMovie } =
  userSlice.actions;
export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;
