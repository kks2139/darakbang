import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';

interface Props {
    text: string
    onClick?: (event: React.MouseEvent<HTMLElement | HTMLButtonElement>, name: string)=>void
    name?: string
    theme?: 'blue' | 'yellow' | 'pink' | 'white' | 'blue_2'
    styles?: CSS.Properties
}

function Button({text, onClick, name='', theme='blue', styles}: Props){
    const clickHandler = (e: React.MouseEvent<HTMLElement | HTMLButtonElement>)=>{
        if(onClick) onClick(e, name);
    }

    const style = css`
        position: relative;
        width: 240px;
        height: 56px;
        line-height: 54px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        border: 1px solid black;
        border-radius: 50px;
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