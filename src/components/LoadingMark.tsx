import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function LoadingMark(){
    const style = css`
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        /* border: 1px solid red; */

        [class*='dot'] {
            position: relative;
            width: 18px;
            height: 18px;
            background-color: var(--color-main-text);
            border-radius: 50%;
            box-shadow: 0 3px 20px -14px var(--color-main-text);
            margin: 0 6px;
            transform: translateY(-50%);
            animation-name: floating;
            animation-timing-function: ease;
            animation-iteration-count: infinite;
            animation-duration: 1.3s;
        }

        .dot-1 {
            animation-delay: .2s;
        }
        .dot-2 {
            animation-delay: .4s;
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
            <div className='dot'></div>
            <div className='dot-1'></div>
            <div className='dot-2'></div>
        </div>
    );
}

export default LoadingMark;