import { Dispatch } from '@reduxjs/toolkit';
import {successLoading,successFullfit,successError} from "../slices/GovernmentMembers";
import axios from 'axios';


export const  fetchGovernmentMember=()=>{
    return async(dispatch:Dispatch)=>{
        try{
            dispatch(successLoading())
            const response=await axios.get("http://localhost:3000/membersInfo");
            dispatch(successFullfit(response.data))
        }
        catch(error){
            dispatch(successError(error as Error))
        }
    }
}
