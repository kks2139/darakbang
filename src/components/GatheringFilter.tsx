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
                <div className='pay' onClick={onClick}>유료</div>
                <div className='pay' onClick={onClick}>무료</div>
            </div>
            <div className='line'></div>
            <div className='filter'>
                {filters.map(f => (
                    <div key={f} className='normal' onClick={onClick}>{f}</div>
                    ))}
            </div>
            <div className='line'></div>
        </div>
    );
}

const style = css`
    .filter {
        display: flex;
        font-size: 16px;
        > div {
            display: flex;
            align-items: center;
            height: 32px;
            margin-right: 16px;
            cursor: pointer;
        }
        .pay {
            color: #B4B4B4;
            border: 1px solid #B4B4B4;  
            padding: 0 16px;  
        }
        .pay.sel {
            border-color: black;
            background-color: #02BCD6;
            color: white;
        }
        .normal {
            color: #B4B4B4;
            border: 1px solid transparent;  
            padding: 8px;  
        }
        .normal.sel {
            border-color: black;
            background-color: #FFA89C;
            color: black;
        }
    }
    .line {
        width: 100%;
        height: 1px;
        background-color: #D9D9D9;
        margin: 8px 0; 
    }
`;

export default GatheringFilter;