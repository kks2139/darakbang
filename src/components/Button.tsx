import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import CSS from 'csstype';

interface Props {
    text: string
    onClick: ({event, name}: {event: React.MouseEvent<HTMLElement | HTMLButtonElement>, name: string})=>void
    name?: string
    theme?: 'blue' | 'yellow' | 'pink' | 'white'
    styles?: CSS.Properties
}

function Button({text, onClick, name='', theme='blue', styles}: Props){
    const backgroundColor = 
        theme === 'blue' ? '--color-main-text' :
        theme === 'yellow' ? '--color-yellow' :
        theme === 'pink' ? '--color-peach' :
        'white';

    const borderColor = 
        theme === 'blue' ? 'black' : 
        theme === 'yellow' ? 'black' :
        theme === 'pink' ? 'black' :
        '--color-main-text';

    const fontColor = 
        theme === 'blue' ? 'white' : 
        theme === 'yellow' ? 'black' :
        theme === 'pink' ? 'black' :
        '--color-main-text';

    const style = css`
        position: relative;
        /* left: 50%;
        transform: translateX(-50%); */
        width: 240px;
        height: 56px;
        line-height: 54px;
        font-size: 24px;
        font-weight: 500;
        color: var(${fontColor});
        text-align: center;
        border: 1px solid;
        border-color: var(${borderColor});
        border-radius: 25px;
        background-color: var(${backgroundColor});
        cursor: pointer;
    `;

    return(
        <button 
            css={style}
            onClick={(event: React.MouseEvent<HTMLElement | HTMLButtonElement>)=> onClick({event, name})} 
            style={styles}>
                {text}
        </button>
    );
}

export default Button;