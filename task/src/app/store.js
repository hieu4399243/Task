import { configureStore } from '@reduxjs/toolkit'
import nameReducer from '../features/counter/nameSlice'

export default configureStore({
    reducer: {
        test: nameReducer
    },
})