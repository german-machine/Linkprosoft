import { configureStore } from "@reduxjs/toolkit";
import formIndexSlice  from './features/formIndex/formIndexSlice'


const store = configureStore({
    reducer: {
        formIndex: formIndexSlice,
    }
})

export default store