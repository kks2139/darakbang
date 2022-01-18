import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { Notification } from "../../util/interfaces";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/index';
import {appActions} from '../../store/app';
import {NotificationItem} from '../index';
import { useHistory } from "react-router-dom";
import { headerHeight, footerHeight } from "../../util/style";

function NotificationList(){
    const history = useHistory();
    const dispatch = useDispatch();
    const {showNotificationList, notifications} = useSelector((state: RootState)=> state.app);
    const divRef = useRef<HTMLDivElement | null>(null);

    const onClickClose = ()=>{
        dispatch(appActions.toggleNotification(!showNotificationList));
    }
    
    const onClickItem = (info: Notification)=>{
        history.push('/notification', {
            notification: info
        });
        onClickClose();
    }

    return (
        <div css={style} className='fade-in' ref={divRef}>
            <div className='header-box'>
                <div className='close' data-type='close' onClick={onClickClose}>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                </div>
            </div>
            {notifications.map(noti => (
                <NotificationItem key={noti.id} notification={noti} onClickItem={onClickItem}/>
            ))}
        </div>
    );
}

const style = ()=> css`
    z-index: 200;
    position: absolute;
    right: 0;
    width: 456px;
    height: calc(100vh - ${(headerHeight + footerHeight)}px);
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