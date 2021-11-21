import React from "react";
import {MakeTeamDone} from '../components/index';
import {} from '../util/interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {useHistory} from 'react-router-dom';
import {toggleConfirmMessage} from '../redux-modules/app';

interface Props {
}

function MakeTeamDoneContainer({}: Props){
    const dispatch = useDispatch();
    const history = useHistory();
    const {teamInfo, teamLeaderInfo} = useSelector((state: RootState)=> state.makeTeam);

    const onOpenActivity = ()=>{
        alert('개발중!');
        // dispatch(toggleConfirmMessage({
        //     title: '내 팀에 함께 할 팀원을 모집해보세요!',
        //     confirmText: '팀원 모집하기'
        // }));
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