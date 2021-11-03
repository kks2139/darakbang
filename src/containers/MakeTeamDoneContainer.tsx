import React from "react";
import {MakeTeamDone} from '../components/index';
import {} from '../util/interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {useHistory} from 'react-router-dom';

interface Props {
}

function MakeTeamDoneContainer({}: Props){
    const dispatch = useDispatch();
    const history = useHistory();
    const {teamInfo, teamLeaderInfo} = useSelector((state: RootState)=> state.makeTeam);

    const onOpenActivity = ()=>{
        history.push('/');
    }

    const onCancel = ()=>{
        history.goBack();
    }

    return (
        <MakeTeamDone
            teamInfo={teamInfo}
            teamLeaderInfo={teamLeaderInfo}
            onOpenActivity={onOpenActivity}
            onCancel={onCancel}/>
    );
}

export default MakeTeamDoneContainer;