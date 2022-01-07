import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {divDate} from '../../util/util';

interface Props {
    activeDate: string
    isEnd: boolean
    isActive: boolean
    onClickDate: (date: string)=> void
}

function DateButton({activeDate, isEnd, isActive, onClickDate}: Props){
    const end = isEnd ? 'end' : '';
    const {MM, dd, HH, mm, ampm} = divDate(activeDate);

    const divRef = useRef<HTMLDivElement | null>(null);

    const onClick = ()=>{
        onClickDate(activeDate);
    }
    
    const style = css`
        display: flex;
        margin-bottom: 4px;
        .date {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 168px;
            height: 40px;
            border: 1px solid ${isActive ? 'black' : '#D9D9D9'};
            border-radius: 25px;
            cursor: pointer;
            img {
                display: ${isActive ? 'block' : 'none'};
                position: absolute;
                right: -20px;
            }
        }
        .date.end {
            color: #D9D9D9;
            cursor: unset;
        }
        .end-txt {
            display: flex;
            align-items: center;
            color: #D9D9D9;
            margin-left: 8px;
        }
    `;

    return (
        <div css={style}>
            <div className={`date ${end}`} onClick={onClick}>
                {`${MM}월 ${dd}일 ${HH} : ${mm} ${ampm}`}
                <img src='/man.png'></img>
            </div>
            {end ? <div className='end-txt'>마감</div> : null}
        </div>
    );
}

export default DateButton;