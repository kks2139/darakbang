import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';
import {GatheringCard} from './index';

interface Props {
    list: GatheringInfo[]
    onClickGathering: (param: GatheringInfo)=> void
}

function GatheringList({list, onClickGathering}: Props){
    const [filteredList, setFilteredList] = useState<GatheringInfo[]>([]);
    const [hideClosed, setHideClosed] = useState(false);

    const onCheckChanged = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setHideClosed(pre => !pre);
    }

    useEffect(()=>{
        const filtered = list.filter(d => !hideClosed || (hideClosed && d.id !== '6'));
        setFilteredList(filtered);
    }, [hideClosed]);

    return (
        <div css={style}>
            <div className='filter-check'>
                <input type='checkbox' id='endYn' onChange={onCheckChanged} checked={hideClosed}></input>
                <label htmlFor='endYn'>마감 팀 안보기</label>
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
        // width: 852px;
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