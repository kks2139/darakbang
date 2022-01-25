import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    space: string
    children?: string | JSX.Element | JSX.Element[]
}

function Space({space, children}: Props){
    const style = css`
        display: flex;
        justify-content: center;
        width: ${space};
    `;

    return (
        <div css={style}>
            {children}
        </div>
    )
}

export default Space;