import React from "react";
import {MakeTeam} from '../components/index';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {setTeamInfo} from '../redux-modules/makeTeam';
import {useHistory} from 'react-router-dom';

interface Param {
    value: string
    label?: string
    name: string
}

function MakeTeamContainers(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {teamLeaderInfo, teamInfo} = useSelector((state: RootState)=> state.makeTeam);

    const onInputChanged = (param: Param)=>{
        const {value, name} = param;
        const obj = {
            ...teamInfo,
            [name]: value
        };
        dispatch(setTeamInfo(obj));
    }

    const onComboboxSelected = (param: Param)=>{
        const {label, name} = param;
        const obj = {
            ...teamInfo,
            [name]: label
        };
        dispatch(setTeamInfo(obj));
    }

    const onMakeTeam = ()=>{
        history.push('/make-team/done');
    }

    const onCancel = ()=>{
        history.goBack();
    }

    return (
        <MakeTeam 
            teamLeaderInfo={teamLeaderInfo}
            teamInfo={teamInfo}
            onInputChanged={onInputChanged}
            onComboboxSelected={onComboboxSelected}
            onMakeTeam={onMakeTeam}
            onCancel={onCancel}/>
    );
}

export default MakeTeamContainers;