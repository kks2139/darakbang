import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { Avatar } from './index';

interface Props {
    children: JSX.Element | JSX.Element[]
    imgUrl?: string
    userName: string
    text: string
    showUser?: boolean
}

function ChatArea({children, imgUrl='', userName, showUser=true}: Props){
    const childs = Array.isArray(children) ? children : [children];

    const style = css`
        display: flex;
        .avatar-box {
            width: 60px;
        }
        .text-box {
            > .name {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 12px;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='avatar-box'>
                {showUser ? <Avatar imgUrl='' style={{width: '50px', height: '50px'}}/> : null}
            </div>
            <div className='text-box'>
                {showUser ? <div className='name'>{userName}</div> : null}
                {childs}
            </div>
        </div>
    );
}

export default ChatArea;