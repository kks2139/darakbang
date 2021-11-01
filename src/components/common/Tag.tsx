import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    name: string
    selected: boolean
}

function Tag({name, selected}: Props){
    return (
        <div css={style(selected)}>
            <div className="tag">
                { name }
            </div>
        </div>
    );
}

const style = (selected: boolean) => (css`
margin: 25px;
    .tag {
        border-radius: 25px;
        padding: 12px;

        font-size: 16px;
        font-weight: 500;
        color: #000000;

        ${selected ? 
            'background-color: #02BCD6; border: 2px solid #000000;'
            : 'background-color: #EDFF1C; border: 1px solid #000000;'
        }
    }
`);

export default Tag;