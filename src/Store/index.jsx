import { ApiFetchData, addToProfileSlice, missionSlice } from "./Slices/ApiFetchData";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer:{
        ApiSlice : ApiFetchData.reducer,
        missionSlice :missionSlice.reducer,
        Profile: addToProfileSlice.reducer
    }
})

export default store;