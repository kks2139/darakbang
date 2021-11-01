import React from "react";
import {MakeTeam} from '../components/index';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {setTeamInfo} from '../redux-modules/makeTeam';

interface Param {
    value: string
    label?: string
    name: string
}

function MakeTeamContainers(){
    const dispatch = useDispatch();
    const {teamLeaderInfo, teamInfo} = useSelector((state: RootState)=> state.makeTeam);

    const onInputChanged = (param: Param)=>{
        const {value, name} = param;
        let obj = null;

        if(name === 'teamName'){
            obj = teamInfo ? {
                ...teamInfo,
                teamName: value
            } : null;
        }else if(name === 'purpose'){
            const over = value.length > 50;
            obj = teamInfo ? {
                ...teamInfo,
                purpose: over ? teamInfo.purpose : value,
                wordCount: over ? 50 : value.length
            } : null;
        }
        dispatch(setTeamInfo(obj));
    }

    const onComboboxSelected = (param: Param)=>{
        const {label, name} = param;
        const obj = teamInfo ? {
            ...teamInfo,
            [name]: label
        } : null;
        dispatch(setTeamInfo(obj));
    }

    return (
        <MakeTeam 
            teamLeaderInfo={teamLeaderInfo}
            teamInfo={teamInfo}
            onInputChanged={onInputChanged}
            onComboboxSelected={onComboboxSelected}/>
    );
}

export default MakeTeamContainers;