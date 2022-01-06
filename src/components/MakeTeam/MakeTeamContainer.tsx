import React from "react";
import {MakeTeam} from '../index';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/index';
import {makeTeamActions} from '../../store/makeTeam';
import {appActions} from '../../store/app';
import {useHistory} from 'react-router-dom';

interface Param {
    value: string | number
    label?: string
    name: string
}

function MakeTeamContainers(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {teamLeaderInfo, teamInfo} = useSelector((state: RootState)=> state.makeTeam);

    const onTeamInfoChanged = (param: Param)=>{
        const {value, name} = param;
        const obj = {
            ...teamInfo,
            [name]: value
        };
        dispatch(makeTeamActions.setTeamInfo(obj));
    }
    
    const onTeamLeaderInfoChanged = (param: Param)=>{
        const {value, name} = param;
        const obj = {
            ...teamLeaderInfo,
            [name]: value
        };
        dispatch(makeTeamActions.setTeamLeaderInfo(obj));
    }

    const onMakeTeam = ()=>{
        dispatch(appActions.toggleConfirmMessage({
            title: '내 팀에 함께 할 팀원을 모집해보세요!',
            confirmText: '팀원 모집하기',
            confirmCallback: ()=>{
                history.push('/make-team/done');
            }
        }));
    }

    const onCancel = ()=>{
        history.goBack();
    }

    return (
        <MakeTeam 
            teamLeaderInfo={teamLeaderInfo}
            teamInfo={teamInfo}
            onTeamInfoChanged={onTeamInfoChanged}
            onTeamLeaderInfoChanged={onTeamLeaderInfoChanged}
            onMakeTeam={onMakeTeam}
            onCancel={onCancel}/>
    );
}

export default MakeTeamContainers;