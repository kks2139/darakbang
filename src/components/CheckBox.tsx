import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    value?: boolean 
    label?: string 
    name?: string
    onCheckChanged: (p1: boolean, p2: string | undefined)=> void
}

function CheckBox({value=false, label='', name, onCheckChanged}: Props){
    const onClick = ()=>{
        onCheckChanged(!value, name);
    }

    const style = css`
        display: flex;
        align-items: center;
        .box {
            width: 20px;
            height: 20px;
            border: 1px solid black;
            background-color: white;
            transition: .1s;
            cursor: pointer;
            ${value && `
                background-color: var(--color-main-text);
            `}
        }
        .label {
            font-size: 20px;
            font-weight: bold;
            margin-left: 8px;
            cursor: pointer;
        }
    `;

    return (
        <div css={style}>
            <div className='box' onClick={onClick}></div>
            <div className='label' onClick={onClick}>{label}</div>
        </div>
    );
}

export default CheckBox;