import React from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/index';
import {appActions} from '../store/app';

function ConfirmMessage(){
    const dispatch = useDispatch();
    const {title, subTitle, msg, confirmText, confirmCallback} = useSelector((state: RootState)=> state.app.confirmMessageInfo);

    const onClickButton = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {type} = e.currentTarget.dataset;
        if(type === 'confirm'){
            if(confirmCallback){
                confirmCallback();                    
            }
        }
        dispatch(appActions.toggleConfirmMessage({
            show: false
        }));
    }

    return (
        <div css={style}>
            <div className='wrapper'>
                <div className='header'>
                    <img className='close' src='/close.png' alt='닫기' onClick={onClickButton}></img>
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
                    <div className='btn' data-type='confirm' onClick={onClickButton}>{confirmText}</div>
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
            padding: 0 40px;
            .close {
                width: 25px;
                height: 25px;
                cursor: pointer;
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