import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {MyTeamList} from '../components/index';

function TeamRoomContainer(){
    const dispatch = useDispatch();
    const {myTeamList} = useSelector((state: RootState)=> state.myTeam);

    return (
        <MyTeamList teamList={myTeamList}/>
    );
}

export default TeamRoomContainer;