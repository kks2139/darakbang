import React from "react";
import {GatheringList} from '../components/index';
import {GatheringInfo} from '../util/interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {setSelectedGathering} from '../redux-modules/gathering';

interface Props {
    onGatheringSelected: ()=> void
}

function GatheringListContainers({onGatheringSelected}: Props){
    const dispatch = useDispatch();
    const gatheringList = useSelector((state: RootState)=> state.gathering.gatheringList);

    const onClickGathering = (info: GatheringInfo)=>{
        dispatch(setSelectedGathering(info));
        onGatheringSelected();
    }

    return (
        <GatheringList list={gatheringList} onClickGathering={onClickGathering}></GatheringList>
    );
}

export default GatheringListContainers;