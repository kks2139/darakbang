import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/index';
import {appActions} from '../../store/app';
import {MyTeamList} from '../index';

function MyTeamListContainer(){
    const dispatch = useDispatch();
    const {myTeamList} = useSelector((state: RootState)=> state.myTeam);

    return (
        <MyTeamList teamList={myTeamList}/>
    );
}

export default MyTeamListContainer;