import React from "react";
import {MakeTeam} from '../components/index';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {setTeamInfo, setTeamLeaderInfo} from '../redux-modules/makeTeam';
import {toggleConfirmMessage} from '../redux-modules/app';
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
        dispatch(setTeamInfo(obj));
    }
    
    const onTeamLeaderInfoChanged = (param: Param)=>{
        const {value, name} = param;
        const obj = {
            ...teamLeaderInfo,
            [name]: value
        };
        dispatch(setTeamLeaderInfo(obj));
    }

    const onMakeTeam = ()=>{
        dispatch(toggleConfirmMessage({
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