import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux-modules/index';
import {MemberInfo} from '../index';
import {TeamDetail} from '../../util/interfaces';

interface Params {
    team: TeamDetail
}

function MemberInfoContainer(){
    const dispatch = useDispatch();
    const {memberList} = useSelector((state: RootState)=> state.myTeam);

    useEffect(()=>{

    }, []);

    return (
        <MemberInfo memberList={memberList}/>
    );
}

export default MemberInfoContainer;