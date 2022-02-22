import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import ReactDOM from 'react-dom';

interface Props {
    children?: JSX.Element | JSX.Element[]
    name?: string
    onPopupClose: (name: string)=> void
}

function Popup({children, name='', onPopupClose}: Props){
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        document.documentElement.style.overflow = 'hidden';
        return ()=>{
            if(document.querySelector('#modal-root')!.children.length == 0){
                document.documentElement.style.overflow = 'auto';
            }
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
            z-index: 101;
            position: fixed;
            background-color: white;
            padding: 10px;

            animation: show-up 0.4s forwards;

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

        @keyframes show-up {
            0% {
                opacity: 0;
                transform: translateY(-30px);
            }
            /* 70% {
                opacity: 1;
                transform: translateY(20px);
            } */
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

    return (
        <>
            {ReactDOM.createPortal(
                <div css={style} ref={divRef}>
                    <div className='popup-wrapper'>
                        <div className='header'>
                            <img className='close' src='/close.png' alt='닫기' onClick={()=> onPopupClose(name)}></img>
                        </div>
                        <div className='content'>
                            {children}
                        </div>
                    </div>
                </div>,
                document.querySelector('#modal-root')!
            )}
        </>
    );
}

export default Popup;