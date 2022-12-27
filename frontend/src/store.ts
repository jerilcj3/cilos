import { configureStore } from '@reduxjs/toolkit'
import cilosSlice from './slices/cilosSlice'
import productsSlice from './slices/productsSlice'

export const store = configureStore({
  reducer: {
    cilosSlice: cilosSlice,
    productsSlice: productsSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch