import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
export const store = configureStore({
    reducer: {
        UserReducer: UserReducer,
    },
});
