import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {divDate} from '../../util/util';

interface Props {
    activeDate: string
    isEnd: boolean
    isActive: boolean
    readOnly: boolean
    onClickDate: (date: string)=> void
}

function DateButton({activeDate, isEnd, isActive, readOnly, onClickDate}: Props){
    const end = isEnd ? 'end' : '';
    const {MM, dd, HH, mm, ampm} = divDate(activeDate);

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
                {!readOnly && <img src='/man.png'></img>}
            </div>
            {(!readOnly && end) && <div className='end-txt'>마감</div>}
        </div>
    );
}

export default DateButton;