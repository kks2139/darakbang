import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {DateButton} from '../index';

interface Props {
    activeDateList: string[]
    nextActiveDate: string
    readOnly?: boolean
}

function DateButtonList({activeDateList, nextActiveDate, readOnly=false}: Props){
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
                return  <DateButton activeDate={date} isEnd={isEnd} isActive={!isEnd && nowActive === date} onClickDate={onClickDate} readOnly={readOnly}/>
            })}
        </div>
    );
}

export default DateButtonList;