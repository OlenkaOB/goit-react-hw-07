import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
}


const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        findContact: (state, action) => {
            state.name = action.payload;
        },

    }


})








export const filterReducer = slice.reducer;
export const { findContact } = slice.actions;