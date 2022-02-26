import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import ReactDOM from 'react-dom';

function LoadingIcon(){
    const style = css`
        --brown: #a37950;

        z-index: 9999;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(0,0,0,0.3);
        
        > .wrapper {
            border: 1px solid red;
            width: 60px;
            height: 60px;
        }

        .seed {
            width: 100%;
            height: 100%;
            background-color: var(--brown);
            border-radius: 0 50px 0 50px;
            box-shadow: inset 0 0 20px 5px black;
            animation: shake .6s linear infinite;
        }

        @keyframes shake {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(50deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
    `;

    return (
        <>
            {ReactDOM.createPortal(
                <div css={style}>
                    <div className='wrapper'>
                        <div className='seed'></div>

                    </div>
                </div>,
                document.querySelector('#modal-root')!
            )}
        </>
    );
}

export default LoadingIcon;