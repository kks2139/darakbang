import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    space: string
}

function Space({space}: Props){
    const style = css`
        width: ${space};
    `;

    return (
        <div css={style}></div>
    )
}

export default Space;