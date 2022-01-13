import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function LoadingMark(){
    const style = css`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;

        div {
            position: absolute;
            border: 9px solid orange;
            border-radius: 50%;
            border-color: var(--color-main-text) transparent transparent transparent;
            width: 80px;
            height: 80px;
            animation: spinning 1s infinite;

            &:nth-child(1){
                animation-delay: -0.3s;
            }
            &:nth-child(2){
                animation-delay: -0.2s;
            }
            &:nth-child(3){
                animation-delay: -0.1s;
            }
        }
        
        @keyframes spinning {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(360deg);
            }
        }

    `;

    return (
        <div css={style}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default LoadingMark;