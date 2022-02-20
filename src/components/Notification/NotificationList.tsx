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
            <div className='tri'></div>
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
    top: ${headerHeight + 10}px;
    width: 456px;
    height: 500px;
    background-color: white;
    box-shadow: 0 0 15px -3px var(--color-dim-gray);
    
    .tri {
        position: absolute;
        top: 0;
        left: 0;
        /* border: 1px solid red; */
        width: 20px;
        height: 20px;
        background-color: white;
        box-shadow: -5px -5px 10px -5px var(--color-dim-gray);
        transform: translate(130%, -50%) rotate(45deg);
    }

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
        0% {
            transform: translateY(-10%);
            opacity: 0;
        }
        70% {
            transform: translateY(5%);
            opacity: 0.7;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes fade-out {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        30% {
            transform: translateY(5%);
            opacity: 3;
        }
        100% {
            transform: translateY(-10%);
            opacity: 0;
        }
    }
`;

export default NotificationList;