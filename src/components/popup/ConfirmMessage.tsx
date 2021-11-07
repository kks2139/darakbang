import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';

interface Props {
    title?: string
    subTitle?: string
    msg?: string
    confirmText?: string
    onClickButton: (arg: React.MouseEvent<HTMLDivElement>)=> void
}

function ConfirmMessage({title='알림', subTitle='', msg='', confirmText='확인', onClickButton}: Props){
    const onClick = (e: React.MouseEvent<HTMLDivElement>)=>{
        onClickButton(e);
    }

    return (
        <div css={style}>
            <div className='wrapper'>
                <div className='header'>
                    <div className='close' data-type='close' onClick={onClick}>
                        <div className='line-1'></div>
                        <div className='line-2'></div>
                    </div>
                </div>
                <div className='title-box'>
                    {title}
                </div>
                {subTitle ? 
                    <div className='sub-title-box'>
                        {subTitle}
                    </div>
                : null}
                {msg ?
                    <div className='msg-box'>
                        {msg}
                    </div>
                : null}  
                <div className='button-box'>
                    <div className='btn' data-type='confirm' onClick={onClick}>{confirmText}</div>
                </div>
            </div>
            <div className='modal'></div>
        </div>
    );
}

const style = css`
    .modal {
        z-index: 100;
        position : fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(0,0,0,0.4);
    }
    .wrapper {
        z-index: 101;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 861px;
        padding: 0 0 80px 0;
        border: 1px solid black;
        border-radius: 10px;
        background-color: white;
        .header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100px;
            .close {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                margin-right: 35px;
                cursor: pointer;
                [class*='line'] {
                    position: absolute;
                    width: 33px;
                    height: 1px;
                    background-color: black;
                }
                .line-1 {
                    transform: rotate(45deg);
                }
                .line-2 {
                    transform: rotate(-45deg);
                }
            }
        }
        .title-box {
            display: flex;
            justify-content: center;
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 64px;
            white-space: pre-line;
        }
        .sub-title-box {
            display: flex;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 24px;
            white-space: pre-line;
        }
        .msg-box {
            display: flex;
            justify-content: center;
            font-size: 24px;
            margin-bottom: 64px;
            white-space: pre-line;
        }
        .button-box {
            display: flex;
            justify-content: center;
            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-weight: 500;
                color: white;
                padding: 16px 28px; 
                background-color: var(--color-main-text);
                border-radius: 25px;
                border: 1px solid black;
                cursor: pointer;
                transition: .2s;
                &:hover {
                    box-shadow: 0 0 0 1px black;
                    // font-weight: bold;
                }
            }
        }
    }
`;

export default ConfirmMessage;