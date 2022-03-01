import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {RankInfo} from '../util/interfaces';

interface Props {
    rankInfo: RankInfo
}

function RankCard({rankInfo}: Props){
    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 264px;
        height: 439px;
        border: 2px solid var(--color-light-gray);
        margin: 0 10px;

        .rank {
            color: var(--color-main-text);
            margin: 40px 0 0 0;
        }

        .txt-1 {
            font-size: 16px;
            font-weight: bold;
            margin: 50px 0;
        }

        .txt-2 {
            margin-bottom: 16px;
        }
    `;

    return (
        <div css={style}>
            <h1 className='rank'>{rankInfo.rank}</h1>
            <h1 className='name'>{rankInfo.teamName}</h1>
            <div className='txt-1'>{rankInfo.lastActivity}</div>
            <div className='txt-2'>{rankInfo.category}</div>
            <div className='txt-2'>{rankInfo.genderRatio}</div>
            <div className='txt-2'>{rankInfo.totalMember}</div>
        </div>
    );
}


export default RankCard;