import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {DateButton} from '../index';

interface Props {
    activeDateList: string[]
    nextActiveDate: string
}

function DateButtonList({activeDateList, nextActiveDate}: Props){
    const [nowActive, setNowActive] = useState('');

    const onClickDate = (date: string)=>{
        setNowActive(date);
    }

    const style = css`
    `;

    return (
        <div css={style}>
            {activeDateList.map(date => {
                const isEnd = nextActiveDate === date;
                return (
                    <>
                        <DateButton activeDate={date} isEnd={isEnd} isActive={!isEnd && nowActive === date} onClickDate={onClickDate}/>
                    </>
                )
            })}
        </div>
    );
}

export default DateButtonList;