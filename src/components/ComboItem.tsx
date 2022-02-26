import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Param {
    value: string | number
    label: string
}

interface Props {
    value: string | number
    label: string
    onClickComboItem?: (param: Param)=> void 
}

function ComboItem({value, label, onClickComboItem}: Props){
    const onClick = ()=>{
        if(onClickComboItem) onClickComboItem({value, label});
    }

    const style = css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 52px;
        color: black;
        font-weight: 500;
        font-size: 16px;
        background-color: white;
        transition: .2s;
        &:hover {
            box-shadow: inset 0 0 0 2px black;
        }
        &:not(:last-child) {
            border-bottom: 1px solid black;
        }
    `;

    return (
        <li css={style} className='item' onClick={onClick} tabIndex={-1} data-combo-item>{label}</li>
    );
}

export default ComboItem;

