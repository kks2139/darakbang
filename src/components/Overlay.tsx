import React, {useState, useRef, useEffect} from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    show: boolean
    onClickOverlay?: ()=> void
}

function Overlay({show, onClickOverlay}: Props){
    const style = css`
        z-index: 1;
        position : fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        /* background-color: rgb(0,0,0,0.5); */
        &.show {
            display: unset;
        }
    `;

    return (
        <>
            {show && <div css={style} className='overlay' onClick={onClickOverlay} data-combo-back></div>}
        </>
    )
}

export default Overlay;