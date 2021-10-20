import React from "react";
import {GatheringDetail} from '../components/index';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';

function GatheringDetailContainers(){
    const selected = useSelector((state: RootState)=> state.gathering.selectedGathering);

    return (
        <GatheringDetail info={selected}></GatheringDetail>
    );
}

export default GatheringDetailContainers;