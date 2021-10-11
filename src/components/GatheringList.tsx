import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {GatheringInfo} from '../util/interfaces';
import {GatheringCard} from './index';

interface Props {
    list: GatheringInfo[]
}

function GatheringList({list}: Props){
    return (
        <div css={style}>
            <div className='filter-check'>
                <input type='checkbox' id='endYn'></input>
                <label htmlFor='endYn'>마감 팀 안보기</label>
            </div>
            <div className='contents'>
                {list.map(info => (
                    <GatheringCard key={info.id} info={info}></GatheringCard>
                ))}
            </div>
            <div className='show-more'>
                더보기
            </div>
        </div>
    );
}

const style = css`
    .filter-check {
        display: flex;
        justify-content: flex-end;
        label {
            font-size: 16px;
            font-weight: 500;
        }
    }
    .contents {

    }
    .show-more {
        display: flex;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
    }
`;

export default GatheringList;