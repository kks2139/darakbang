import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {RankInfo} from '../util/interfaces';

interface Props {
    rankInfo: RankInfo
    isFocus: boolean
    isReset: boolean
    moved: number
    cardTransitionEnd: ()=>void
    resetEnd: ()=>void
}

function RankCard({rankInfo, isFocus, isReset, moved, cardTransitionEnd, resetEnd}: Props){
    const divRef = useRef<HTMLDivElement>(null);
    const distance = -1 * 100 * moved;

    const onTransitionEnd = ()=>{
        cardTransitionEnd();
    }

    useEffect(()=>{
        if(isReset){
            resetEnd();
        }
    }, [isReset]);

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 250px;
        height: 420px;
        background-color: white;
        border: 2px solid var(--color-light-gray);
        ${isReset ?  '' : `transition: .3s;`}

        ${isFocus ? `
            z-index: 1;
            border-image: linear-gradient(to right, var(--color-main-text) 0%, var(--color-green) 100%);
            border-image-slice: 1;
            ` : `
        `}

        transform: translateX(${distance}%) ${isFocus ? `
            translateY(-20px)
            scale(1.05)
        ` : `
            // scale(0.95)
        `};

        .rank {
            color: var(--color-main-text);
            margin: 40px 0 0 0;
            font-size: 40px;
            ${isFocus ? `
                background: -webkit-linear-gradient(#eee, #333);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            ` : ``};
        }
        
        .name {
            font-size: 25px;
            ${isFocus ? `` : ``};
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
        <div css={style} ref={divRef} onTransitionEnd={onTransitionEnd}>
            <h1 className='rank'>{rankInfo.rank}</h1>
            <h2 className='name'>{rankInfo.teamName}</h2>
            <div className='txt-1'>{rankInfo.lastActivity}</div>
            <div className='txt-2'>{rankInfo.category}</div>
            <div className='txt-2'>{rankInfo.genderRatio}</div>
            <div className='txt-2'>{rankInfo.totalMember}</div>
        </div>
    );
}


export default RankCard;