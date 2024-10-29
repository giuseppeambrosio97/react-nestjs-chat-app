import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TAuthState = {
    username: string;
}

const initialState: TAuthState = {
    username: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        }
    }
})

export const {
    setUsername
} = authSlice.actions;

export default authSlice.reducer;