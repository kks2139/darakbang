import React from "react";
import {GatheringDetail} from '../components/index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {setSelectedGathering} from '../redux-modules/gathering';
import {setBackgroundColor} from '../redux-modules/app';

interface Props {
    onClickBack: ()=> void
}

function GatheringDetailContainers({onClickBack}: Props){
    const dispatch = useDispatch();
    const selected = useSelector((state: RootState)=> state.gathering.selectedGathering);

    const onBack = ()=>{
        dispatch(setSelectedGathering(null));
        dispatch(setBackgroundColor('white'));
        onClickBack();
    }

    return (
        <GatheringDetail info={selected} onBack={onBack}></GatheringDetail>
    );
}

export default GatheringDetailContainers;