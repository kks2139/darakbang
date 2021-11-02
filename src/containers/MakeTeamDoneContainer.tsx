import React from "react";
import {MakeTeamDone} from '../components/index';
import {} from '../util/interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';

interface Props {
}

function MakeTeamDoneContainer({}: Props){
    const dispatch = useDispatch();
    // const gatheringList = useSelector((state: RootState)=> state.gathering.gatheringList);

    return (
        <MakeTeamDone/>
    );
}

export default MakeTeamDoneContainer;