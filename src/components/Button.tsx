import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';

interface Props {
    text: string
    onClick?: (event: React.MouseEvent<HTMLElement>, name: string)=>void
    name?: string
    theme?: 'blue' | 'yellow' | 'pink' | 'white' | 'blue_2'
    width?: number
    scale?: number
    styles?: CSS.Properties
}

function Button({text, onClick, name='', theme='blue', width, scale, styles}: Props){
    const clickHandler = (e: React.MouseEvent<HTMLElement>)=>{
        if(onClick) onClick(e, name);
    }

    const style = css`
        position: relative;
        ${width ? `width: ${width}px;` : ''}
        ${scale ? `transform: scale(${scale});` : ''}
        padding: 0 20px;
        height: 56px;
        line-height: 54px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        border: 1px solid black;
        border-radius: 50px;
        transition: .3s;
        cursor: pointer;

        ${theme === 'blue' ? `
            background-color: var(--color-main-text);
            color: white;
        ` : ''}
        ${theme === 'yellow' ? `
            background-color: var(--color-yellow);
        ` : ''}
        ${theme === 'pink' ? `
            background-color: var(--color-peach);
        ` : ''}
        ${theme === 'blue_2' ? `
            background-color: var(--color-main-text);
            border: 0;
            border-radius: 0;
            color: white;
        ` : ''}

        &:hover {
            box-shadow: 0 0 0 2px black;
        }
    `;

    return(
        <button 
            css={style}
            onClick={clickHandler} 
            style={styles}>
                {text}
        </button>
    );
}

export default Button;