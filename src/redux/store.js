import { configureStore } from '@reduxjs/toolkit';
import languagesReducer from "./slices/languagesSlice";
import modeReducer from "./slices/modeSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
};

const persistedLanguagesReducer = persistReducer(persistConfig, languagesReducer);
const persistedModeReducer = persistReducer(persistConfig, modeReducer);

const store = configureStore({
    reducer: {
        languages: persistedLanguagesReducer,
        mode: persistedModeReducer,
    }
});

export const persistor = persistStore(store);

export default store;