import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "darkMode",
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;