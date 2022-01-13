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
        
        .wrapper {
            position: absolute;
            display: flex;

            div {
                position: absolute;
                width: 18px;
                height: 18px;
                background-color: var(--color-main-text);
                border-radius: 50%;
                box-shadow: 0 3px 20px -14px var(--color-main-text);
                margin: 0 6px;
                animation-name: floating;
                animation-timing-function: ease;
                animation-iteration-count: infinite;
                animation-duration: 1s;
    
                &:nth-child(1){
                    left: -25px;
                }
                &:nth-child(2){
                    animation-delay: -0.2s;
                }
                &:nth-child(3){
                    left: 25px;
                    animation-delay: -0.4s;
                }
            }
        }

        @keyframes floating {
            0% {
                transform: translateY(-50%);
            }
            50% {
                transform: translateY(50%);
                background-color: var(--color-light-gray);
            }
            100% {
                transform: translateY(-50%);
            }
        }
    `;

    return (
        <div css={style}>
            <div className='wrapper'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingMark;