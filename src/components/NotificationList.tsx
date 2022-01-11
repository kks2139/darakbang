import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { Notification } from "../util/interfaces";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/index';
import {appActions} from '../store/app';

function NotificationList(){
    const dispatch = useDispatch();
    const {showNotificationList, notifications} = useSelector((state: RootState)=> state.app);
    const divRef = useRef<HTMLDivElement | null>(null);

    const onClickClose = ()=>{
        dispatch(appActions.toggleNotification(!showNotificationList));
    }

    return (
        <div css={style} className='fade-in' ref={divRef}>
            <div className='header-box'>
                <div className='close' data-type='close' onClick={onClickClose}>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                </div>
            </div>
            <div className='notification-list-box'>
                {notifications.map(noti => (
                    <div key={noti.id} className='noti'>
                        <div className={`title ${noti.checked ? 'checked' : ''}`}>
                            {noti.isSecret ? <img src='/mail-1.png'></img> : null}
                            {noti.title}
                        </div>
                        <div className='info-box'>
                            <div>1분 전</div>
                            <div>{noti.checked ? '읽음' : '안 읽음'}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const style = ()=> css`
    z-index: 200;
    position: absolute;
    right: 0;
    width: 456px;
    height: 100%;
    border-left: 1px solid var(--color-dim-gray);
    background-color: white;
    box-shadow: 0 3px 10px -5px var(--color-dim-gray);

    .header-box {
        display: flex;
        justify-content: flex-end;
        .close {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            margin: 12px;
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
    .notification-list-box {
        margin-top: 40px;
        .noti {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 84px;
            border-bottom: 1px solid var(--color-dim-gray);
            padding: 0 48px;
            transition: .1s;
            cursor: pointer;
            &:hover {
                background-color: #F3F3F3;
            }
            .title {
                display: flex;
                width: 100%;
                font-size: 20px;
                font-weight: bold;
                &.checked {
                    color: var(--color-dim-gray);
                }
                img {
                    object-fit: contain;
                    margin-right: 3px;
                }
            }
            .info-box {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: 4px;
                font-weight: bold;
                font-size: 12px;
                color: var(--color-dim-gray);
            }
        }
    }

    &.fade-in {
        animation-name: fade-in;
        animation-duration: .5s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
    }

    &.fade-out {
        animation-name: fade-out;
        animation-duration: .5s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
    }

    @keyframes fade-in {
        0% {transform: translateX(100%);}
        70% {transform: translateX(-5%);}
        100% {transform: translateX(0)}
    }
    
    @keyframes fade-out {
        0% {transform: translateX(0);}
        30% {transform: translateX(-5%);}
        100% {transform: translateX(100%);}
    }
`;

export default NotificationList;