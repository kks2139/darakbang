import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux-modules/index';
import {appActions} from '../../redux-modules/app';
import {MyTeamList} from '../index';

function MyTeamListContainer(){
    const dispatch = useDispatch();
    const {myTeamList} = useSelector((state: RootState)=> state.myTeam);

    return (
        <MyTeamList teamList={myTeamList}/>
    );
}

export default MyTeamListContainer;