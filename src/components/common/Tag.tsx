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

    return (
        <div css={style(select, theme)} onClick={onClick}>
            <div className="tag">
                { name }
            </div>
        </div>
    );
}

const style = (select: boolean, theme: string) => (css`
    margin: 4px;
    .tag {
        display: flex;
        justify-content: center;
        border-radius: 25px;
        padding: 12px 8px;

        font-size: 16px;
        font-weight: 500;
        color: #000000;
        
        cursor: pointer;
        
        ${theme === 'dark' ? `
            ${select ? 
                'background-color: var(--color-main-text); border: 2px solid #000000;'
                : 'background-color: var(--color-yellow); border: 2px solid #000000;'
            }
        ` : `
            ${select ? 
                'background-color: var(--color-main-text); border: 2px solid #000000;'
                : 'background-color: white; border: 2px solid var(--color-main-text);'
            }
        `}

    }
`);

export default Tag;