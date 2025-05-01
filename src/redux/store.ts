// import { configureStore } from "@reduxjs/toolkit";
// import { baseApi } from "./features/api/baseApi";
// const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });

// export default store;



// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './features/api/authApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (gDM) => gDM().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState  = ReturnType<typeof store.getState>;
