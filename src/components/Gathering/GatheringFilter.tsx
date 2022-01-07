import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';

function GatheringFilter(){
    const filters = useSelector((state: RootState)=> state.gathering.filters);

    const onClickFilter = ()=>{
        
    }

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
            background-color: var(--color-peach);
            color: black;
            border-radius: 10px;
            font-weight: 600;
        }
    }
`;

export default GatheringFilter;