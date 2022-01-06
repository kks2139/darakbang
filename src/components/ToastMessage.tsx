import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    text: string
    resetToastMessage: ()=> void
}

function ToastMessage({text, resetToastMessage}: Props){
    const timerId = useRef(0);
    
    useEffect(()=>{
        timerId.current = window.setInterval(()=>{
            resetToastMessage();
        }, 2400);
        return ()=> {
            clearInterval(timerId.current);
        }
    }, []);

    const style = css`
        z-index: 999;
        position: fixed;
        top: 150px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-peach);
        border: 2px solid var(--color-peach);
        border-radius: 5px;
        padding: 26px 40px;
        font-size: 16px;
        background-color: white;
        animation-name: toggle;
        animation-duration: 2.5s;
        animation-timing-function: ease;
        
        @keyframes toggle {
            0% {
                transform: translate(-50%, -30px);
                opacity: 0;
            }
            20% {
                transform: translate(-50%, 0);
                opacity: 1;
            }
            80% {
                transform: translate(-50%, 0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -30px);
                opacity: 0;
            }
        }
    `;

    return (
        <div css={style} className='text'>
            {text}
        </div>
    );
}

export default ToastMessage;