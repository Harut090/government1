import { configureStore } from "@reduxjs/toolkit";
import governmentMembers from "./slices/GovernmentMembers";
import governmentMembersFullInfo from "./slices/GovernmetMembersFullInfo";

export const store=configureStore({
    reducer:{
        membersInfo:governmentMembers,
        membersFullInfo:governmentMembersFullInfo,

    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

