import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    password: null,

}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLongin: {
      reducer(state, action) {
        console.log("저장소 유저정보 로그인", action.payload);
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
      console.log("저장소 sign out");
      state.email = null;
      state.password = null;
    },
  },
});

export const { setUserLongin, setSignOut } = userSlice.actions;
export const selectUserEmail = state => state.user.email;

export default userSlice.reducer;