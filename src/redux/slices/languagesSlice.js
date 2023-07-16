import { createSlice } from "@reduxjs/toolkit";
import en from "../../languages/en.json";
import es from "../../languages/es.json";


const languagesSlice = createSlice({
    name: "languages",
    initialState: {
        language: "en",
        languages: {
            en: en,
            es: es,
        },
    },
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === "en" ? "es" : "en";
        }   
    }
});

export const { toggleLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;
