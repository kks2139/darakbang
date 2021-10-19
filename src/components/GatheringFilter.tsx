import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    filters: string[]
    onClickFilter: ()=> void;
}

function GatheringFilter({filters, onClickFilter}: Props){
    const onClick = (e: React.MouseEvent<HTMLDivElement>)=>{
        e.currentTarget.classList.toggle('sel');
        onClickFilter();
    }

    return (
        <div css={style}>
            <div className='filter'>
                {filters.map(f => (
                    <div key={f} className='normal' onClick={onClick}>{f}</div>
                ))}
            </div>
        </div>
    );
}

const style = css`
    margin-bottom: 30px;
    .filter {
        display: flex;
        font-size: 16px;
        > div {
            display: flex;
            align-items: center;
            height: 32px;
            cursor: pointer;
        }
        .normal {
            color: #B4B4B4;
            border: 1px solid transparent;  
            padding: 8px;  
            margin-right: 16px;
            font-weight: 500;
        }
        .normal.sel {
            border-color: black;
            background-color: #FFA89C;
            color: black;
            border-radius: 10px;
            font-weight: 600;
        }
    }
`;

export default GatheringFilter;