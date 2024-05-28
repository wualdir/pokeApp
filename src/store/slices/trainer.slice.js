import { createSlice } from '@reduxjs/toolkit';
export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer:(state,action)=>action.payload
    }
})
export const { setTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;