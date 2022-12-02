import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {IMemberFullInfo} from "../../types/models";

interface IFullInfo{
    loading:boolean,
    error:string,
    membersFullInfo:IMemberFullInfo;
}

const initialState={
    loading:false,
    error:"",
    membersFullInfo:<IMemberFullInfo[]>[]
}

export const governmentMembersFullInfo=createSlice({
    name:"membersFullInfo",
    initialState,
    reducers:{
        successLoading:(state)=>{
            state.loading=true;
        },
        successFullfit:(state,action:PayloadAction<[]>)=>{
            state.loading=false;
            state.membersFullInfo=action.payload;
        },
        successError:(state,action:PayloadAction<Error>)=>{
            state.error=action.payload.message;
        }
    }

});
export const {successError,successFullfit,successLoading}=governmentMembersFullInfo.actions;
export default governmentMembersFullInfo.reducer;