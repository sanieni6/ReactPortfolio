import { createSlice } from "@reduxjs/toolkit";
import en from "../../languages/en.json";
import es from "../../languages/es.json";


const languagesSlice = createSlice({
    name: "languages",
    initialState: {
        language: "en",
        currentLanguage: en,
    },
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === "en" ? "es" : "en";
            state.currentLanguage = state.language === "en" ? en : es;
        }   
    }
});

export const { toggleLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;
