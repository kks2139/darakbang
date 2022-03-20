import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {RankInfo} from '../util/interfaces';

interface Props {
    rankInfo: RankInfo
    isTop: boolean
}

function RankCard({rankInfo, isTop}: Props){
    const divRef = useRef<HTMLDivElement>(null);

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 250px;
        height: 420px;
        background-color: white;
        border: 2px solid transparent;
        opacity: 1;
        margin: 0 5px;

        ${isTop ? `
            background-image: linear-gradient(white, white), linear-gradient(315deg, #02BCD6, #EDFF1C);
            background-origin: border-box;
            background-clip: content-box, border-box;
        ` : `
            border-color: var(--color-light-gray);
        `}

        .title-box {
            height: 130px;
            max-height: 130px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            ${isTop ? 'padding-top: 10px;' : ''}
        }

        .rank {
            ${isTop ? `
                font-size: 80px;
                background: linear-gradient(300deg, var(--color-main-text), var(--color-yellow));
                color: transparent;
                -webkit-background-clip: text;
                ` : `
                font-size: 40px;
                margin: 40px 0 0 0;
                color: var(--color-main-text);
            `};
        }
        
        .name {
            ${isTop ? `
                font-size: 35px;
            ` : `
                font-size: 25px;
            `}
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
        <div css={style} ref={divRef}>
            <div className='title-box'>
                <h1 className='rank'>{rankInfo.rank}</h1>
                <h2 className='name'>{rankInfo.teamName}</h2>
            </div>
            <div className='txt-1'>{rankInfo.lastActivity}</div>
            <div className='txt-2'>{rankInfo.category}</div>
            <div className='txt-2'>{rankInfo.genderRatio}</div>
            <div className='txt-2'>{rankInfo.totalMember}</div>
        </div>
    );
}


export default RankCard;