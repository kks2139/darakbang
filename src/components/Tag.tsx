import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    name: string
    selected?: boolean
    onSelect?: (param: boolean)=> void 
    theme?: 'light' | 'dark'
}

function Tag({name, selected=false, onSelect, theme='dark'}: Props){
    const [select, setSelect] = useState(selected);

    const onClick = ()=>{
        setSelect(!select);
        if(onSelect) onSelect(!select);
    }

    const style = css`
        margin: 4px;
        .tag {
            display: flex;
            justify-content: center;
            border-radius: 25px;
            padding: 10px 10px;
            font-size: 15px;
            font-weight: bold;
            color: #000000;
            transition: .2s;

            box-shadow: 6px 6px 15px -14px black;

            cursor: pointer;
            
            ${theme === 'dark' ? `
                ${select ? `
                    background-color: var(--color-main-text); 
                    color: white;
                ` : `
                    background-color: var(--color-yellow); 
                `}
            ` : `
                ${select ? `
                    background-color: var(--color-main-text); 
                    color: white;
                ` : `
                    background-color: white; 
                `}
            `}

        }
    `;

    return (
        <div css={style} onClick={onClick}>
            <div className="tag">
                { name }
            </div>
        </div>
    );
}

export default Tag;