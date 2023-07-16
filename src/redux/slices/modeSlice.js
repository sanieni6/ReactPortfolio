import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "darkMode",
    initialState: {
        darkMode: "light",
    },
    reducers: {
        toggleMode: (state) => {
            state.darkMode = state.darkMode === "light" ? "dark" : "light";
        }
    }
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;