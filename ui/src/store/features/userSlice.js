import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLongin: {
            reducer(state, action) {
            console.log('유저정보 로그인', action.payload);
            state = action.payload
        },
        prepare(email, password) {
            return {
                payload:{
                    email,
                    password

                }
            }
        }
        }

    }
})

export const {setUserLongin} = userSlice.actions;
export const selectUserEmail = state => state.user.email;
export default userSlice.reducer;