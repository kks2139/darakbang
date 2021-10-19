import React from "react";
import {GatheringList} from '../components/index';
import {GatheringInfo} from '../util/interfaces';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';

interface Props {
    onClickGathering: (param: GatheringInfo)=> void
}

function GatheringListContainers({onClickGathering}: Props){
    const gatheringList = useSelector((state: RootState)=> state.gathering.gatheringList);

    return (
        <GatheringList list={gatheringList} onClickGathering={onClickGathering}></GatheringList>
    );
}

export default GatheringListContainers;