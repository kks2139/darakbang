import React from "react";
import {GatheringList} from '../index';
import {GatheringInfo} from '../../util/interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux-modules/index';
import {gatheringActions} from '../../redux-modules/gathering';
import {appActions} from '../../redux-modules/app';
import { useHistory } from "react-router-dom";


interface Props {
    onGatheringSelected: ()=> void
}

function GatheringListContainers({onGatheringSelected}: Props){
    const history = useHistory();
    const dispatch = useDispatch();
    const gatheringList = useSelector((state: RootState)=> state.gathering.gatheringList);

    const onClickGathering = (info: GatheringInfo)=>{
        // dispatch(setSelectedGathering(info));
        dispatch(appActions.setBackgroundColor('var(--color-bg-gray)'));

        history.push({
            pathname: '/gathering/detail',
            state: {
                gatheringInfo: info
            }
        });

        onGatheringSelected();
    }

    return (
        <GatheringList list={gatheringList} onClickGathering={onClickGathering}></GatheringList>
    );
}

export default GatheringListContainers;