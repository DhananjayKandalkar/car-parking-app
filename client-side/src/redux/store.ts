import { configureStore } from "@reduxjs/toolkit";
import parkingSlice from "./parkingSlice";


const store = configureStore({
    reducer:{
        parking: parkingSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
    }),
})


export type RootState = ReturnType<typeof store.getState>;
export default store