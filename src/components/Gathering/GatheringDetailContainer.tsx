import React from "react";
import {GatheringDetail} from '../index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/index';
import {gatheringActions} from '../../store/gathering';
import {appActions} from '../../store/app';
import { useLocation } from "react-router-dom";
import {GatheringInfo} from '../../util/interfaces';

interface Params {
    gatheringInfo: GatheringInfo
}

interface Props {
    onClickBack: ()=> void
}

function GatheringDetailContainers({onClickBack}: Props){
    const dispatch = useDispatch();
    const location = useLocation<Params>();
    const {gatheringInfo}: Params = location.state;

    return (
        <GatheringDetail info={gatheringInfo}></GatheringDetail>
    );
}

export default GatheringDetailContainers;