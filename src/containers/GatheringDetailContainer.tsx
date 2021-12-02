import React from "react";
import {GatheringDetail} from '../components/index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux-modules/index';
import {setSelectedGathering} from '../redux-modules/gathering';
import {setBackgroundColor, toggleConfirmMessage} from '../redux-modules/app';
import { useLocation } from "react-router-dom";
import {GatheringInfo} from '../util/interfaces';

interface Params {
    gatheringInfo: GatheringInfo
}

interface Props {
    onClickBack: ()=> void
}

function GatheringDetailContainers({onClickBack}: Props){
    const dispatch = useDispatch();
    const location = useLocation<Params>();
    // const selected = useSelector((state: RootState)=> state.gathering.selectedGathering);
    const {gatheringInfo}: Params = location.state;

    const onBack = ()=>{
        dispatch(setSelectedGathering(null));
        dispatch(setBackgroundColor('white'));
        onClickBack();
    }
    
    const onJoin = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {type} = e.currentTarget.dataset;

        dispatch(toggleConfirmMessage({
            title: `참여 하시려는 활동의 내용이 맞는지
            마지막으로 확인해 주세요!`,
            subTitle: '다락방',
            msg: `
                ${gatheringInfo?.place}
                ${type === 'once' ? '한 번 참여' : ''}
                ${gatheringInfo?.nextActiveDate}`,
            confirmText: '확인',
            show: true,
            confirmCallback: nextStep
        }));
    }

    const nextStep = ()=>{

    }

    return (
        <GatheringDetail info={gatheringInfo} onBack={onBack} onJoin={onJoin}></GatheringDetail>
    );
}

export default GatheringDetailContainers;