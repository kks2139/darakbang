import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    children?: JSX.Element | JSX.Element[]
    name?: string
    onPopupClose: (name: string)=> void
}

function Popup({children, name='', onPopupClose}: Props){
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        document.documentElement.style.overflow = 'hidden';
        return ()=>{
            document.documentElement.style.overflow = 'auto';
        }
    });

    const style = css`
        z-index: 100;
        position : fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(0,0,0,0.4);
        display: flex;
        justify-content: center;
        align-items: center;

        > .popup-wrapper {
            border: 1px solid red;
            z-index: 101;
            position: fixed;
            border: 1px solid black;
            border-radius: 10px;
            background-color: white;
            padding: 10px;
            > .header {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height: 60px;
                padding: 0 20px;
                .close {
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                }
            }
            > .content {
                min-height: 100px;
                min-width: 300px;
            }
        }
    `;

    return (
        <div css={style} ref={divRef}>
            <div className='popup-wrapper'>
                <div className='header'>
                    <img className='close' src='/close.png' alt='닫기' onClick={()=> onPopupClose(name)}></img>
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Popup;