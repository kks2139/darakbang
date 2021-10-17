import React from "react";
import {GatheringList} from '../components/index';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';

function GatheringListContainers(){
    const gatheringList = useSelector((state: RootState)=> state.gathering.gatheringList);

    return (
        <GatheringList list={gatheringList}></GatheringList>
    );
}

export default GatheringListContainers;