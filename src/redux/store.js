import { configureStore } from '@reduxjs/toolkit';
import languagesReducer from "./slices/languagesSlice";
import modeReducer from "./slices/modeSlice";

const store = configureStore({
    reducer: {
        languages: languagesReducer,
        mode: modeReducer,
    }
});

export default store;