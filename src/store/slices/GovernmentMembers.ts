import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IMemberInfo} from "../../types/models";

interface IState{
    loading:boolean,
    error:string,
    members:[];
}

const initialState:IState={
    loading:false,
    error:"",
    members:[]
    
}

 export const governmentMembers=createSlice({
    name:"membersInfo",
        initialState,
        reducers:{
            successLoading:(state)=>{
                state.loading=true;
                
            },
            successFullfit:(state,action: PayloadAction<[]>)=>{
                state.loading=false;
                state.members=action.payload;
                
            },
            successError:(state,action:PayloadAction<Error>)=>{
                state.error=action.payload.message;

            }
        }

});
export const {successLoading,successFullfit,successError}=governmentMembers.actions;
export default governmentMembers.reducer;