import { createSlice } from "@reduxjs/toolkit";

const ApiFetchData = createSlice(
    {
        name: "ApiSlice",
        initialState : [],
        reducers :{
            addToRocket(state,action){
                console.log(action.payload);
                return [...state, ...action.payload];
            }
        }
    }
)
const missionSlice = createSlice({
    name: "missionSlice",
    initialState: [],
    reducers: {
    addToMission(state, action) {
        return [...state, ...action.payload];
    },
    },
});

const addToProfileSlice = createSlice({
    name : "Profile",
    initialState : [],
    reducers :{
        addToProfile(state,action){
            state.push(action.payload);
            console.log(action.payload);
        }
    }
})

export {ApiFetchData,missionSlice,addToProfileSlice};
export const {addToRocket}=ApiFetchData.actions;
export const {addToMission}=missionSlice.actions;
export const {addToProfile}=addToProfileSlice.actions;


