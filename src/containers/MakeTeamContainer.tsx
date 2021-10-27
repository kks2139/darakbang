import React from "react";
import {MakeTeam} from '../components/index';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';

function MakeTeamContainers(){
    const teamInfo = useSelector((state: RootState)=> state.makeTeam.teamInfo);

    return (
        <MakeTeam></MakeTeam>
    );
}

export default MakeTeamContainers;