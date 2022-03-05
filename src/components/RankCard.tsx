import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {RankInfo} from '../util/interfaces';

interface Props {
    rankInfo: RankInfo
    isFocus: boolean
    isReset: boolean
    isOutside: boolean
    moved: number
    cardTransitionEnd: ()=>void
    resetEnd: ()=>void
}

const PADDING = 7;

function RankCard({rankInfo, isFocus, isReset, isOutside, moved, cardTransitionEnd, resetEnd}: Props){
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
        border: 1px solid var(--color-dim-gray);
        opacity: 1;

        ${isFocus ? `
            z-index: 1;
            border-image: linear-gradient(to right, var(--color-main-text) 0%, var(--color-green) 100%);
            border-width: 5px;
            border-image-slice: 1;
        ` : `
        `}

        ${isOutside ? `
            opacity: 0;
        ` : ``}
        
        ${isReset ?  '' : `transition: .3s;`}

        transform: translateX(${distance}%) ${isFocus ? `
            translateY(-20px)
            scale(1.05)
        ` : `
            // scale(0.95)
        `};

        &:hover {
        }
        
        .rank {
            color: var(--color-main-text);
            font-size: 40px;
            margin: 40px 0 0 0;
            ${isFocus ? `
                background: -webkit-linear-gradient(#00ca6c, #02BCD6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                // margin: 15px 0 0 0;
                ` : `
            `};
        }
        
        .name {
            font-size: 25px;
            ${isFocus ? `
            ` : ``};
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