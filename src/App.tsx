import React from 'react';
import {fetchGovernmentMemberFullInfo} from "../src/store/actions/governmentMembersFullInfoAction";
import {fetchGovernmentMember} from "../src/store/actions/governmentMembersAction"
import {useEffect} from "react";
import {useAppDispatch,useAppSelector} from "./hooks";
import {Routes,Route} from "react-router-dom";
import {Login} from "./pages/login"

function App() {
    // const dispatch=useAppDispatch();
    // const {membersFullInfo}=useAppSelector((state) => state.membersFullInfo);
    // const {members}=useAppSelector((state) => state.membersInfo);
    // useEffect(()=>{
    //     dispatch(fetchGovernmentMemberFullInfo());
    //     dispatch((fetchGovernmentMember()))
    // },[dispatch]);
    // console.log(members)
    // console.log(membersFullInfo);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
