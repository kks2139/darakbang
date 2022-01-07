import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../../util/interfaces';
import {GatheringCard, CheckBox} from '../index';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/index';
import {appActions} from '../../store/app';
import { useHistory } from "react-router-dom";

interface Props {
    onGatheringSelected: ()=> void
}

function GatheringList({onGatheringSelected}: Props){
    const history = useHistory();
    const dispatch = useDispatch();
    const gatheringList = useSelector((state: RootState)=> state.gathering.gatheringList);
    const [filteredList, setFilteredList] = useState<GatheringInfo[]>([]);
    const [hideClosed, setHideClosed] = useState(false);

    const onCheckChanged = ()=>{
        setHideClosed(pre => !pre);
    }

    const onClickGathering = (info: GatheringInfo)=>{
        dispatch(appActions.setBackgroundColor('var(--color-bg-gray)'));
        history.push({
            pathname: '/gathering/detail',
            state: {
                gatheringInfo: info
            }
        });

        onGatheringSelected();
    }

    useEffect(()=>{
        const filtered = gatheringList.filter(data => !hideClosed || (hideClosed && data.id !== '6'));
        setFilteredList(filtered);
    }, [hideClosed, gatheringList]);

    return (
        <div css={style}>
            <div className='filter-check'>
                <CheckBox value={hideClosed} onCheckChanged={onCheckChanged} label='마감 팀 안보기'/>
            </div>
            <div className='list-box'>
                {filteredList.map((info, i) => (
                    <GatheringCard key={info.id} info={info} onClickGathering={onClickGathering}></GatheringCard>
                ))}
            </div>
            <div className='show-more'>
                <img src='vector.png'></img>더보기
            </div>
        </div>
    );
}

const style = css`
    .filter-check {
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        label {
            font-size: 16px;
            font-weight: 500;
        }
        margin: 18px 0;
    }
    .list-box {
        width: 852px;
        display: flex;
        flex-wrap: wrap;
    }
    .show-more {
        display: flex;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        margin: 10px 0;
        img {
            margin-right: 10px;
        }
    }
`;

export default GatheringList;