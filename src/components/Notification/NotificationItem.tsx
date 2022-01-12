import React, { useRef } from "react";
/** @jsxImportSource @emotion/react */ 
import {css} from '@emotion/react';
import { Notification } from "../../util/interfaces";

interface Props {
    notification: Notification
    onClickItem: (notification: Notification)=> void
}

function NotificationItem({notification, onClickItem}: Props){
    const style = css`
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
    `;

    return (
        <div css={style} onClick={()=> onClickItem(notification)}> 
            <div className={`title ${notification.checked ? 'checked' : ''}`}>
                {notification.isSecret ? <img src='/mail-1.png'></img> : null}
                {notification.title}
            </div>
            <div className='info-box'>
                <div>1분 전</div>
                <div>{notification.checked ? '읽음' : '안 읽음'}</div>
            </div>
        </div>
    );
}


export default NotificationItem;