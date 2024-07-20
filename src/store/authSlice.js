import { createSlice } from "@reduxjs/toolkit";

// define initial state of the reducer/Slice
const initialState = {
    status: false,
    userData: null
}

// creation of slice 
const authSlice = createSlice({
    name: "auth",
    initialState, 
    reducers : {
        // action of reducers - login & logout
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;


// Creation of Slice
// Slice is a parent version of reducers. many reducers combined into Slice.
